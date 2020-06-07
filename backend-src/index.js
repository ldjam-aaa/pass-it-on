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

import path from 'path';
import express from 'express';

import api from './api/index';
import { } from './db';
import config from "./config";

const appRoot = path.dirname(require.main.filename);
const appName = require('../package.json').name;
const app = express();
const port = config.server.port;

// Use API router for all requests under /api
app.use('/api', api);

// Serve the index page on access to /
app.get('/', (req, res) => {
    res.sendFile(path.join(appRoot, '..', 'static', 'index.html'));
});

// Serve from built version of frontend-src for anything else
app.use(express.static(path.join(appRoot, '..', 'static')));


app.listen(port, () => {
    console.log(`${appName} started on port ${port}`)
});
