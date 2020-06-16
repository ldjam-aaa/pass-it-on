/**
 * Copyright 2020 The Pass It On Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
