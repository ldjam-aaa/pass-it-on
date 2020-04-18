import { Game } from '../../db';

export default async (req, res) => {
    const games = await Game.findAll().catch(() => {
        res.status(500).send('Error finding all games');
    });

    res.json(games);
};
