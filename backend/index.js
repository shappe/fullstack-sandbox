'use strict';
const express = require('express');
const app = express();

const api = require('./api/routes/');

app.use('/api', api);

app.listen(3001, () => console.log('Backend listening on port 3001!'));
