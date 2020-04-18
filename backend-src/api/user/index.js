import express from 'express';

import getAPI from './get';
import createAPI from './create';

// Accessible from /api/user
const router = express.Router();

// Get user /api/user/get/:id
router.get('/get/:uuid', getAPI);

// Create user /api/user/create
router.post('/create', createAPI);

export default router;
