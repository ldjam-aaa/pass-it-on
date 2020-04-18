import express from 'express';

const router = express.Router();

router.get('/healthcheck', (req, res) => {
    res.send(`Running okay!`);
});

export default router;
