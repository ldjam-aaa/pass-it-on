/**
 * Return a response code if any of the given params are not set
 * @param res Express request response
 * @param status Status code to return on error
 * @param {...*} params params to check
 * @return {Boolean} Whether the request seems okay
 */
function checkParams (res, status, ...params) {
    if (params.filter(param => param === undefined).length > 0) {
        res.status(status || 400).send();
        return false
    }
    return true
}

export {
    checkParams
};
