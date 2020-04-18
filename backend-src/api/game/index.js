import express from 'express';

import listAllAPI from './listall';

// Accessible from /api/game
const router = express.Router();

router.get('/listall', listAllAPI);

export default router;
