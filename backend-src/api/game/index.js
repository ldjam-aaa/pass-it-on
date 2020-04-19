import express from 'express';

import listAllAPI from './listall';
import createAPI from './create';
import submitPhraseAPI from './submitphrase';

// Accessible from /api/game
const router = express.Router();

router.get('/listall', listAllAPI);
router.post('/create', createAPI);
router.post('/submitphrase/:game_id', submitPhraseAPI);

export default router;
