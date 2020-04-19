import { User } from "./db";

async function authMiddlware(req, res, next) {
    const uuid = req.cookies?.uuid;
    if (!uuid) {
        next();
        return;
    }
    const user = await User.findOne({
        where: {
            uuid
        }
    });
    if (user) {
        req.user = user;
    }
    next();
}
export {
    authMiddlware
}
