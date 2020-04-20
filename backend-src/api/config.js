import config from "../config";

export default async (req, res) => {
    res.json(config.game);
};
