import { Game } from '../../../db';
import { checkParams } from "../../../helpers";
import { randomOrderPhrases } from "../../../phrases";

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

    // get game instance
    const game = await Game.findOne({
        where: {
            id: game_id,
        },
    }).catch(() => {
        res.status(500).send();
    });
    if (!game) {
        res.status(404).send();
        return;
    }

    // Create response
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

    const phrases = randomOrderPhrases(game.firstPhraseId);
    const tr = {
        possible: phrases,
        phrase: {
            id: phraseToSolve.id,
            content: phraseToSolve.content,
        },
    };
    res.json(tr);
};
