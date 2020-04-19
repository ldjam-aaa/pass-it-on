import express from 'express';

import submitPhraseAPI from './submitphrase';
import getDecodeAPI from './getDecode';

// Accessible from /api/game/one
const router = express.Router();

router.get('/:game_id/getdecode', getDecodeAPI);
router.post('/:game_id/submitphrase', submitPhraseAPI);

export default router;
