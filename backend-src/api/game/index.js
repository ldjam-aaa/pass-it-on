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

import express from 'express';

import oneAPI from './one/index';

import listAllAPI from './listall';
import createAPI from './create';
import getGameAPI from './getGame';

// Accessible from /api/game
const router = express.Router();

router.get('/listall', listAllAPI);
router.post('/create', createAPI);
// Post request because it may create a new game if necessary.
router.post('/getgame', getGameAPI);

router.use('/one', oneAPI);

export default router;
