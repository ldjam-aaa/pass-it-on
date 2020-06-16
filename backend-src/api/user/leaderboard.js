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

import { User } from "../../db";

export default async (req, res) => {
    const users = await User.findAll({
        order: [
            ['score', 'DESC']
        ],
    }).catch(() => {
        res.status(500).send();
    });
    if (!users) {
        return;
    }
    const tr = users.map(u => {
        return {
            username: u.username,
            score: u.score,
        };
    });
    res.send(tr);
};
