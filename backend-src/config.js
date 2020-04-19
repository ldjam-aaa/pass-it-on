const env = process.env;


export default {
    database: {
        connection: env.DATABASE_CONNECTION || 'sqlite:database.db',
    },
    server: {
        url: env.SERVER_URL || 'https://example.com',
        port: env.PORT || 3000,
    },
    oauth: {
        github: {
            client_id: env.GITHUB_CLIENT_ID || '',
            client_secret: env.GITHUB_CLIENT_SECRET || '',
        },
    }
};

