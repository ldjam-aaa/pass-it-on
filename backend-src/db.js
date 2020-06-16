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

import { Sequelize, DataTypes } from 'sequelize'
import { v4 as uuid } from 'uuid';

import config from "./config";

// Constants object to be exported
const CONSTANTS = {};

// init sqlite database
const sequelize = new Sequelize(config.database.connection);

// define all the model schema
const User = sequelize.define('user', {
  username: DataTypes.STRING,
  score: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  uuid: {
    primaryKey: true,
    type: DataTypes.UUID,
  }
});

User.beforeCreate(user => user.uuid = uuid());

CONSTANTS.GAME = {
  STATE: {
    STARTED: 2,
    ENDED: 3,
  }
};

const Game = sequelize.define('game', {
  state: {
    type: DataTypes.INTEGER,
    validate: {
      isIn: [Object.values(CONSTANTS.GAME.STATE)]
    },
    defaultValue: CONSTANTS.GAME.STATE.STARTED,
  },
  phraseCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  firstPhraseId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

const Phrase = sequelize.define('phrase', {
  content: DataTypes.TEXT,
  score: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  voted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

// define associations
const GameUsers = sequelize.define('GameUsers', {
  gameId: {
    type: DataTypes.INTEGER,
    references: {
      model: Game,
      key: 'id',
    },
  },
  userUuid: {
    type: DataTypes.UUID,
    references: {
      model: User,
      key: 'uuid'
    }
  }
});
Game.belongsToMany(User, { through: 'GameUsers' });
User.belongsToMany(Game, { through: 'GameUsers' });

User.hasMany(Phrase);
Game.hasMany(Phrase);

Phrase.belongsTo(Game);
Phrase.belongsTo(User);


// synchronize database with the schema
sequelize.sync();

// exports
export {
  User,
  Game,
  Phrase,
  GameUsers,
  CONSTANTS,
};