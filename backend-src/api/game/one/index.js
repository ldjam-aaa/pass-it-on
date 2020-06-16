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

import getPhraseAPI from './getPhrase';
import submitPhraseAPI from './submitphrase';
import getDecodeAPI from './getDecode';
import submitDecodeAPI from './submitDecode';
import getAllPhrasesAPI from './getAllPhrases';
import statsAPI from './stats';

// Accessible from /api/game/one
const router = express.Router();

router.get('/:game_id/stats', statsAPI);
router.get('/:game_id/getdecode', getDecodeAPI);
router.post('/:game_id/submitphrase', submitPhraseAPI);
router.get('/:game_id/getphrase', getPhraseAPI);
router.post('/:game_id/:phrase_id/submitdecode', submitDecodeAPI);
router.get('/:game_id/getallphrases', getAllPhrasesAPI);

export default router;
