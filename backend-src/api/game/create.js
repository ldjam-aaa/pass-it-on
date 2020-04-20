import { Game } from '../../db';
import randomPhrase from "../../phrases";

export default async (req, res) => {

    console.log('got to route')

    const user = req.user;
    if (!user) {
        res.status(401).send();
        return;
    }

    const newPhrase = randomPhrase();

    console.log('got random phrase')

    const game = await Game.create({
        firstPhraseId: newPhrase.id,
    }).catch((err) => {
        console.log('error up here!')
        console.log(err)
        res.status(500).send('error here');
    });

    console.log('created game')

    if (!game) {
        return;
    }

    user.addGame(game);
    console.log('added game')

    const phrase = await game.createPhrase({
        content: newPhrase.phrase,
    }).catch(e => {
        console.log('error down here!')

        console.log(e)
        res.status(500).send(e);
    });
    if (!phrase) {
        return;
    }
    game.increment('phraseCount');
    res.send(game);
};
