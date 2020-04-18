import { Sequelize } from 'sequelize'

import { v4 as uuid } from 'uuid';

// init sqlite database
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: process.env.DB_CONN_INFO || './database.db'
});

// define all the model schema
const User = sequelize.define('user', {
  username: Sequelize.STRING,
  score: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  uuid: {
    primaryKey: true,
    type: Sequelize.UUID,
  }
});

User.beforeCreate(user => user.uuid = uuid());

const Game = sequelize.define('game', {

});

const Phrase = sequelize.define('phrase', {
  content: Sequelize.TEXT,
  score: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
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
  Phrase
};