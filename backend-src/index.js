import path from 'path';
import express from 'express';

import api from './api';

const appRoot = path.dirname(require.main.filename);
const appName = require('../package.json').name;
const app = express();
const port = process.env.PORT || 3000;

app.use('/api', api);
app.get('/', (req, res) => {
    res.sendFile(path.join(appRoot, '..', 'static', 'index.html'));
});
app.use(express.static(path.join(appRoot, '..', 'static')));


app.listen(port, () => {
    console.log(`${appName} started on port ${port}`)
});
