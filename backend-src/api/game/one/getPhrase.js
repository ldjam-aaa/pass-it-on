import {CONSTANTS, Game} from '../../../db';
import { checkParams } from "../../../helpers";
import config from "../../../config";

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
    const game_id = req.params.game_id;
    if (!checkParams(res, 400, game_id)) {
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

    // get the phrase to send
    const phrasesInGame = await game.getPhrases({
        order: [
            ['id', 'DESC'],
        ],
        limit: 1,
    }).catch(() => undefined);
    if (!phrasesInGame) {
        res.status(500).send();
    }
    const phraseToSolve = phrasesInGame[0];
    res.send({
        phrase: {
            content: phraseToSolve.content,
            id: phraseToSolve.id,
        }
    });
}
