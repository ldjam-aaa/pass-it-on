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
    const game_id = req.params.game_id;
    if (!checkParams(res, 400, game_id)) {
        return;
    }

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

    // Check that the player has participated in the game
    const user_in_game = await user.hasGame(game).catch(() => {
        res.send(500).send();
    });
    if (typeof user_in_game !== 'boolean') {
        return;
    }
    if (!user_in_game) {
        res.send(401).json({
            error: "User has not participated in this game",
        });
        return;
    }

    // get the phrases to send
    const phrasesInGame = await game.getPhrases({
        order: [
            ['id', 'ASC'],
        ],
    }).catch(() => undefined);
    if (!phrasesInGame) {
        res.status(500).send();
    }

    const phrases = phrasesInGame.map(p => {
        return {
            id: p.id,
            content: p.content,
            score: p.score,
            voted: p.voted,
            createdAt: p.createdAt,
            updatedAt: p.updatedAt,
        };
    });

    res.send(phrases);
}
