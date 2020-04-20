import { Game } from '../../../db';
import { checkParams } from "../../../helpers";
import { phrases } from "../../../phrases";

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
    const submitted_phrase = req.body.phrase;
    const game_id = req.params.game_id;
    const phrase_id = req.params.phrase_id;
    if (!checkParams(res, 400, game_id, phrase_id, submitted_phrase)) {
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

    // Get associated phrase
    const phraseList = await game.getPhrases({
        where: {
            id: phrase_id,
        },
    }).catch(() => undefined);
    if (!phraseList) {
        res.status(404).send();
    }
    const phrase = phraseList[0];

    // Put user in game
    await user.addGame(game).catch(() => {
        res.status(500).send();
    });
    console.log(submitted_phrase);
    console.log(phrases[game.firstPhraseId][0]);
    
    
    // Check that the user was correct
    const user_correct = phrases[game.firstPhraseId][0] === submitted_phrase;
    if (!user_correct) {
        res.json({
            correct: false,
        })
        return;
    }
    phrase.increment('score');
    res.json({
        correct: true,
    });
};
