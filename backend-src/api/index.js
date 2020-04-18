import express from 'express';

import userAPI from './user/index';
import gameAPI from './game/index';

// Accessible from /api
const router = express.Router();

// Use body parser
router.use(express.json());

// Health check
router.get('/healthcheck', (req, res) => {
    res.send(`Running okay!`);
});

// For /api/user
router.use('/user', userAPI);

// For /api/game
router.use('/game', gameAPI);

export default router;
