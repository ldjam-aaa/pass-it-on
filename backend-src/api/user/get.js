import { User } from '../../db';

import { checkParams } from "../../helpers";

export default async (req, res) => {
    const uuid = req.params.uuid;
    if (!checkParams(res, 400, uuid)) {
        return;
    }

    const user = await User.findOne({
        where: {
            uuid,
        },
    }).catch(() => {
        res.status(500)
    });

    res.json(user);
};
