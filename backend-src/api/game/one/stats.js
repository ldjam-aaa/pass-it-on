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

import { Op } from 'sequelize';

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
        res.status(400).send('game not found');
        return;
    }

    const numberOfGamesWithLongerChain = await Game.count({
        where: {
            phraseCount: {
                [Op.gt]: game.phraseCount,
            },
        },
    }).catch(() => {
        res.status(401).send();
    });

    res.send({
        numberOfGamesWithLongerChain,
        phraseCount: game.phraseCount,
        state: game.state
    });
}
