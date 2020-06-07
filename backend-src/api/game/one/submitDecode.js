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

import { Game } from '../../../db';
import { checkParams } from "../../../helpers";
import { phrases } from "../../../phrases";
import config from "../../../config";

export default async (req, res) => {
    // Validate request
    const user = req.user;
    if (!user) {
        res.status(401).send();
        return;
    }
    if (!req.body) {
        res.status(400).send();
        return;
    }
    const submitted_phrase = req.body.phrase;
    const game_id = req.params.game_id;
    const phrase_id = req.params.phrase_id;
    if (!checkParams(res, 400, game_id, phrase_id, submitted_phrase)) {
        return;
    }

    // get game instance
    const game = await Game.findOne({
        where: {
            id: game_id,
        },
    }).catch(() => {
        res.status(500).send();
    });
    if (!game) {
        res.status(404).send();
        return;
    }

    // Get associated phrase
    const phraseList = await game.getPhrases({
        where: {
            id: phrase_id,
        },
    }).catch(() => undefined);
    if (!phraseList) {
        res.status(404).send();
    }
    const phrase = phraseList[0];

    if (phrase.voted) {
        res.status(401).json({
            correct: false,
            error: "This phrase has already been voted on",
        });
        return;
    }

    phrase.set('voted', true);
    phrase.save();

    // Check that the user was correct
    const user_correct = phrases[game.firstPhraseId][0] === submitted_phrase;
    if (!user_correct) {
        res.json({
            correct: false,
        });
        //end the game
        game.set('state', CONSTANTS.GAME.STATE.ENDED);
        game.save();
        // Remove points from player that gave the phrase for which the submitted phrase was incorrect
        const phraseUser = await phrase.getUser().catch(() => undefined);
        if (!phraseUser) {
            phraseUser.decrement('score', {
                by: phrase.score,
            });
        }
        return;
    }

    user.increment('score', {
        by: config.game.decodePoints,
    });

    res.json({
        correct: true,
    });
};
