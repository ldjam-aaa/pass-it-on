import sequelize from "sequelize";

import { User } from "../../db";

import { checkParams } from "../../helpers";

export default async (req, res) => {
  const uuid = req.params.uuid;
  if (!checkParams(res, 400, uuid)) {
    return;
  }

  const user = await User.findOne({
    where: {
      uuid
    }
  }).catch(() => {
    res.status(500).send();
  });

  if (!user) {
    return;
  }

  const phrases = await user.getPhrases().catch(() => undefined);
  const games = await user.getGames().catch(() => undefined);

  const numberOfPhrases = await user
    .getPhrases({
      attributes: [[sequelize.fn("COUNT", sequelize.col("*")), "count"]]
    })
    .catch(() => undefined);
  const numberOfGames = await user
    .getGames({
      attributes: [[sequelize.fn("COUNT", sequelize.col("*")), "count"]]
    })
    .catch(() => undefined);
  const numberOfActiveGames = await user.getGames(
    {
      attributes: [[sequelize.fn("COUNT", sequelize.col("*")), "count"]]
    },
    {
      where: {
        state: {
          defaultValue: 2
        }
      }
    })
    .catch(() => undefined);

  if (!phrases || !numberOfPhrases || !numberOfGames || !numberOfActiveGames) {
    res.status(500).send();
    return;
  }

  const tr = {
    username: user.username,
    score: user.score,
    uuid: user.uuid,
    phrases: phrases,
    games: games,
    numberOfPhrases: numberOfPhrases[0].dataValues.count,
    numberOfGames: numberOfGames[0].dataValues.count,
    numberOfActiveGames: numberOfActiveGames[0].dataValues.count
  };

  res.json(tr);
};
