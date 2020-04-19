import {CONSTANTS, Game} from '../../db';
import { checkParams } from "../../helpers";
import config from "../../config";

export default async (req, res) => {
    // Validate request
    const user = req.user;
    if (!user) {
        res.status(401).send();
        return;
    }
    if (!req.body) {
        res.status(400).send();
        return;
    }
    const newPhrase = req.body.phrase;
    const game_id = req.params.game_id;
    if (!checkParams(res, 400, newPhrase, game_id)) {
        return;
    }

    // Find the associated game
    const game = await Game.findOne({
        where: {
            id: game_id,
        },
    }).catch(() => {
        res.status(401).send();
    });
    if (!game) {
        return;
    }

    // Check that the game isn't over
    if (game.state === CONSTANTS.GAME.STATE.ENDED || game.phraseCount >= config.game.maxPhrases) {
        game.set('state', CONSTANTS.GAME.STATE.ENDED);
        game.save();
        res.status(403).json({
            error: "game has ended"
        });
        return;
    }

    // Create the phrase
    const phrase = await game.createPhrase({
        content: newPhrase
    }).catch(() => {
        res.status(500).send();
    });
    if (!phrase) {
        return;
    }
    game.increment('phraseCount');
    phrase.setUser(user);
    res.send(phrase);
}
