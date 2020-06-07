/**
 * Copyright 2020 The Pass It On Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
