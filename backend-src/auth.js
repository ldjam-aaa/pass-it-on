import passport from 'passport';
import GitHubStrategy from 'passport-github2';

import config from "./config";
import { User } from "./db";

passport.use(new GitHubStrategy({
    clientId: config.oauth.github.client_id,
    clientSecret: config.oauth.github.client_secret,
    callbackURL: `${config.server.url}/api/auth/github/callback`,
    },
    (accessToken, refreshToken, profile, done) => {
        console.log(profile);
         User.findOrCreate({ githubId: profile.id }).done(u => done(undefined, u)).catch(e => done(e));
    }));