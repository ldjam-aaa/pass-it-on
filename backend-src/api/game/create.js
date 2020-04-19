import { Game } from '../../db';
import randomPhrase from "../../phrases";

export default async (req, res) => {
    const user = req.user;
    if (!user) {
        res.status(401).send();
        return;
    }
    const game = await Game.create({}).catch(() => {
        res.status(500).send();
    });
    if (!game) {
        return;
    }
    user.addGame(game);
    const phrase = await game.createPhrase({
        content: randomPhrase(),
    }).catch(() => {
        res.status(500).send();
    });
    if (!phrase) {
        return;
    }
    game.increment('phraseCount');
    res.send(game);
};
