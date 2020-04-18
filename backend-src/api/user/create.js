import { User } from '../../db';

import { checkParams } from "../../helpers";

export default async (req, res) => {
    const username = req.body?.username;
    if (!checkParams(res, 400, username)) {
        return;
    }
    const user = await User.create({
        username
    }).catch(() => {
        res.status(500).send({
            "error": "Error creating user"
        })
    });
    res.json(user);
};
