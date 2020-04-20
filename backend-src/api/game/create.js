import { Game } from '../../db';
import randomPhrase from "../../phrases";

export default async (req, res) => {


    const user = req.user;
    if (!user) {
        res.status(401).send();
        return;
    }

    const newPhrase = randomPhrase();


    const game = await Game.create({
        firstPhraseId: newPhrase.id,
    }).catch((err) => {
        res.status(500).send('error here');
    });


    if (!game) {
        return;
    }

    user.addGame(game);

    const phrase = await game.createPhrase({
        content: newPhrase.phrase,
    }).catch(e => {
        res.status(500).send(e);
    });
    if (!phrase) {
        return;
    }
    game.increment('phraseCount');
    res.send(game);
};
