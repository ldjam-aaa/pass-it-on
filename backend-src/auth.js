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

import { User } from "./db";

async function authMiddlware(req, res, next) {
    const uuid = req.cookies?.uuid;
    if (!uuid) {
        next();
        return;
    }
    const user = await User.findOne({
        where: {
            uuid
        }
    });
    if (user) {
        req.user = user;
    }
    next();
}
export {
    authMiddlware
}
