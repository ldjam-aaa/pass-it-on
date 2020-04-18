import express from 'express';

// Accessible from /api
const router = express.Router();

// Health check
router.get('/healthcheck', (req, res) => {
    res.send(`Running okay!`);
});

export default router;
