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
User.hasMany(Phrase);
User.hasMany(Game);

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
  CONSTANTS,
};