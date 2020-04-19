import { User } from "../../db";

export default async (req, res) => {
    const users = await User.findAll({
        order: [
            ['score', 'DESC']
        ],
    }).catch(() => {
        res.status(500).send();
    });
    if (!users) {
        return;
    }
    const tr = users.map(u => {
        return {
            username: u.username,
            score: u.score,
        };
    });
    res.send(tr);
};
