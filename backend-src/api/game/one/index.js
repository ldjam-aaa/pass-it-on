import express from 'express';

import getPhraseAPI from './getPhrase';
import submitPhraseAPI from './submitphrase';
import getDecodeAPI from './getDecode';
import submitDecodeAPI from './submitDecode';

// Accessible from /api/game/one
const router = express.Router();

router.get('/:game_id/getdecode', getDecodeAPI);
router.post('/:game_id/submitphrase', submitPhraseAPI);
router.get('/:game_id/getphrase', getPhraseAPI);
router.post('/:game_id/:phrase_id/submitdecode', submitDecodeAPI);

export default router;
