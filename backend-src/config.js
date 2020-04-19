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
    },
};
