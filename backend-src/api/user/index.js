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

import getAPI from './get';
import createAPI from './create';
import leaderboardAPI from './leaderboard';

// Accessible from /api/user
const router = express.Router();

// Get user /api/user/get/:id
router.get('/get/:uuid', getAPI);

// Create user /api/user/create
router.post('/create', createAPI);

// Leaderboard /api/user/leaderboard
router.get('/leaderboard', leaderboardAPI);

export default router;
