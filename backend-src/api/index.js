import express from 'express';
import cookieParser from 'cookie-parser';

import { authMiddlware } from "../auth";

import userAPI from './user/index';
import gameAPI from './game/index';

// Accessible from /api
const router = express.Router();

// Middlewares
router.use(express.json());
router.use(cookieParser());
router.use(authMiddlware);


// Health check
router.get('/healthcheck', (req, res) => {
    res.send(`Running okay!`);
});

// For /api/user
router.use('/user', userAPI);

// For /api/game
router.use('/game', gameAPI);

export default router;
