const env = process.env;

export default {
    database: {
        connection: env.DATABASE_CONNECTION || 'sqlite:database.db',
    },
    server: {
        port: env.PORT || 3000,
    },
    game: {
        maxPhrases: env.GAME_MAX_PHRASES || 10,
        minGames: env.GAME_MIN_GAMES || 10,
        maxLevenshteinPointsPerPhrase: env.GAME_MAX_LEVENSHTEIN_POINTS_PER_PHRASE || 1000,
        levenshteinPointsMultiplier: env.GAME_LEVENSHTEIN_POINTS_MULTIPLIER || 50,
        sameNumWordsPoints: env.GAME_SAME_NUM_WORDS_POINTS || 300,
        noIdenticalWordsPoints: env.GAME_NO_IDENTICAL_WORDS_POINTS || 300,
        decodePoints: env.GAME_DECODE_POINTS || 500,
    },
};
