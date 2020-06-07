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
import cookieParser from 'cookie-parser';

import { authMiddlware } from "../auth";

import statsAPI from './stats';
import configAPI from './config';
import userAPI from './user/index';
import gameAPI from './game/index';

// Accessible from /api
const router = express.Router();

// Middlewares
router.use(express.json());
router.use(cookieParser());
router.use(authMiddlware);


// Health check
router.get('/healthcheck', (req, res) => {
    res.send(`Running okay!`);
});

// For /api/stats
router.get('/stats', statsAPI);

// For /api/config
router.get('/config', configAPI);

// For /api/user
router.use('/user', userAPI);

// For /api/game
router.use('/game', gameAPI);

export default router;
