import express from 'express';

import userAPI from './user/index';

// Accessible from /api
const router = express.Router();

// Use body parser
router.use(express.json());

// Health check
router.get('/healthcheck', (req, res) => {
    res.send(`Running okay!`);
});

router.use('/user', userAPI);

export default router;
