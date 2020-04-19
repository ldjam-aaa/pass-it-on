import { Game, Phrase } from "../db";

export default async (req, res) => {
    const numberOfGames = await Game.count().catch(() => {
        res.status(500).send();
    });
    if (isNaN(numberOfGames)) {
        return;
    }
    const numberOfPhrases = await Phrase.count().catch(() => {
        res.status(500).send();
    });
    if (isNaN(numberOfPhrases)) {
        return;
    }
    res.json({
        numberOfGames,
        numberOfPhrases,
    });
};
