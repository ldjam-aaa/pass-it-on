import { Op } from 'sequelize';

import { Game, CONSTANTS } from '../../db';
import randomPhrase from "../../phrases";

export default async (req, res) => {

    const user = req.user;
    if (!user) {
        res.status(401).send();
        return;
    }

    const possibleGames = await Game.findAll({
      where: {
        state: {
          [Op.eq]: CONSTANTS.GAME.STATE.STARTED,
        },
      },
      limit: 10,
    }).catch((err) => {
        res.status(500).send('no active games');
    });

    if (!possibleGames){
      res.status(500).send('no active games');
      return;
    }
    const game = possibleGames[Math.floor(Math.random() * possibleGames.length)];
    
    res.send(game);
};
