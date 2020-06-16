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

import { CONSTANTS, Game, Phrase } from "../db";

export default async (req, res) => {
    const numberOfGames = await Game.count().catch(() => {
        res.status(500).send();
    });
    if (isNaN(numberOfGames)) {
        return;
    }

    const numberOfActiveGames = await Game.count({
      where: {
        state: CONSTANTS.GAME.STATE.STARTED,
      }
    }).catch(() => {
        res.status(500).send();
    });

    if (isNaN(numberOfActiveGames)) {
        return;
    }

    const numberOfPhrases = await Phrase.count().catch(() => {
        res.status(500).send();
    });
    if (isNaN(numberOfPhrases)) {
        return;
    }
    res.json({
        numberOfGames,
        numberOfPhrases,
        numberOfActiveGames
    });
};
