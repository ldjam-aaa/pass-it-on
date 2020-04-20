// Endpoint to either get a currently running game
// or make a new game and return it if there are
// not enough currently running games

import Sequelize from 'sequelize';

import { CONSTANTS, Game } from '../../db';
import randomPhrase from "../../phrases";
import config from "../../config";

export default async (req, res) => {
    // Validate request
    const user = req.user;
    if (!user) {
        res.status(401).send();
        return;
    }

    // Is a new game required?
    const numberOfActiveGames = await Game.count({
        where: {
            state: CONSTANTS.GAME.STATE.STARTED,
        },
    }).catch(() => {
        res.status(500).send();
    });

    if (isNaN(numberOfActiveGames)) {
        res.status(500).send();
        return;
    }

    if (numberOfActiveGames >= config.game.minGames) {
        // There's enough games already. Let's find a random game from this list.
        const randomActiveGame = await Game.findOne({
            where: {
                state: CONSTANTS.GAME.STATE.STARTED,
            },
            order: [Sequelize.fn('RANDOM')],
            attributes: ['id'],
        }).catch(() => {
            res.status(500).send();
        });
        if (!randomActiveGame) {
            res.status(500).send();
            return;
        }
        res.json({
            game_id: randomActiveGame.id,
        });
        return;
    }

    // A new game is required
    const newPhrase = randomPhrase();
    const game = await Game.create({
        firstPhraseId: newPhrase.id,
    }).catch(() => undefined);
    if (!game) {
        res.status(500).send();
        return;
    }
    user.addGame(game);
    const phrase = await game.createPhrase({
        content: newPhrase.phrase,
    }).catch(() => undefined);
    if (!phrase) {
        res.status(500).send();
        return;
    }
    game.increment('phraseCount');

    res.json({
        game_id: game.id,
    });
};

