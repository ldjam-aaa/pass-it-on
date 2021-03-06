/**
 * Copyright 2020 The Pass It On Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {CONSTANTS, Game} from '../../../db';
import { checkParams } from "../../../helpers";
import config from "../../../config";
import levenshtein from 'fast-levenshtein';

export default async (req, res) => {
    // Validate request
    const user = req.user;
    console.log("USER IS:")
    console.log(user)
    if (!user) {
        res.status(401).send();
        return;
    }
    if (!req.body) {
        res.status(400).send();
        return;
    }
    let newPhrase = req.body.phrase;
    const game_id = req.params.game_id;
    if (!checkParams(res, 400, newPhrase, game_id)) {
        return;
    }
    newPhrase = newPhrase.trim();

    // Find the associated game
    const game = await Game.findOne({
        where: {
            id: game_id,
        },
    }).catch(() => {
        res.status(401).send();
    });
    if (!game) {
        return;
    }

    // Check that the game isn't over
    if (game.state === CONSTANTS.GAME.STATE.ENDED || game.phraseCount >= config.game.maxPhrases) {
        game.set('state', CONSTANTS.GAME.STATE.ENDED);
        game.save();
        res.status(403).json({
            error: "game has ended"
        });
        return;
    }

    const phrasesInGame = await game.getPhrases({
        order: [
            ['id', 'DESC'],
        ],
        limit: 1,
    }).catch(() => undefined);

    if (!phrasesInGame) {
        res.status(500).send();
    }

    const lastPhrase = phrasesInGame[0].content;

    // Allowed phrase checks
    if (!validPhrase(newPhrase, lastPhrase)) {
        res.status(400).json({
            "valid": false,
        })
    }

    // Find points for this phrase
    const levenshteinPoints = Math.min(levenshtein.get(newPhrase, lastPhrase) * config.game.levenshteinPointsMultiplier, config.game.maxLevenshteinPointsPerPhrase);
    const noIdenticalWordsPoints = identicalWords(newPhrase, lastPhrase) ? 0 : config.game.noIdenticalWordsPoints;
    const sameNumWordsPoints = newPhrase.split(" ").length === lastPhrase.split(" ").length ? config.game.sameNumWordsPoints : 0;
    const points = levenshteinPoints + noIdenticalWordsPoints + sameNumWordsPoints;

    // Create the phrase
    const phrase = await game.createPhrase({
        content: newPhrase,
        score: points,
    }).catch(() => {
        res.status(500).send();
    });
    if (!phrase) {
        return;
    }
    game.increment('phraseCount');
    phrase.setUser(user);
    user.addGame(game);
    user.increment('score', {
        by: points,
    });
    res.json({
        valid: true,
        score: {
            "Levenshtein distance": levenshteinPoints,
            "No identical words": noIdenticalWordsPoints,
            "No added words": sameNumWordsPoints,
        },
    });
}

/**
 *
 * @param {String} phrase
 * @param {String} givenPhrase
 * @return {boolean}
 */
function identicalWords(phrase, givenPhrase) {
    const phraseArr = phrase.toLowerCase().split(" ");
    const givenPhraseArr = givenPhrase.toLowerCase().split(" ");
    for(let word of phraseArr) {
        if(givenPhraseArr.includes(word)) {
            return true
        }
    }
    return false
}

/**
 *
 * @param {String} phrase
 * @param {String} lastPhrase
 * @returns {boolean}
 */
function validPhrase(phrase, lastPhrase) {
    // Check not identical
    if (phrase.trim() === lastPhrase.trim()) {
        return false;
    }

    if (phrase.toLowerCase().split(" ").length < 7) {
        return false;
    }

    return true;
}
