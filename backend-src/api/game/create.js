import { Game } from '../../db';

export default async (req, res) => {
    const user = req.user;
    if (!user) {
        res.status(401).send();
        return;
    }
    const game = await Game.create({}).catch(e => {
        res.status(500).send(e);
    });
    if (game) {
        user.addGame(game);
        res.send(game);
    }
};
