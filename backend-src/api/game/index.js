import express from 'express';

import oneAPI from './one/index';

import listAllAPI from './listall';
import createAPI from './create';

// Accessible from /api/game
const router = express.Router();

router.get('/listall', listAllAPI);
router.post('/create', createAPI);

router.use('/one', oneAPI);

export default router;
