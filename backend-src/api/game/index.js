import express from 'express';

import listAllAPI from './listall';
import createAPI from './create';

// Accessible from /api/game
const router = express.Router();

router.get('/listall', listAllAPI);
router.get('/create', createAPI);

export default router;
