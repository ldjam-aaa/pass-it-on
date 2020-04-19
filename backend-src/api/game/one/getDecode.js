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

    // Make sure the user is not in the game
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
    const user_in_game = await user.hasGame(game).catch(() => {
        res.send(500).send();
    });
    if (typeof user_in_game !== 'boolean') {
        return;
    }
    if (user_in_game) {
        res.send(401).json({
            error: "User has participated in this game",
        });
        return;
    }

    // Create response
    const phrases = randomOrderPhrases(game.firstPhraseId);
    res.json(phrases);
};
