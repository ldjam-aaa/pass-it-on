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
