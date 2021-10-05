// import express from 'express';
// import notFoundMiddleware from './middleware/not-found.js';
// import errorMiddleware from './middleware/error.js';
// import animals from './middleware/animals.js';
const express = require('express');
const notFoundMiddleware = require('./middleware/not-found.js');
const errorMiddleware = require('./middleware/error.js');
const species = require('../lib/Controllers/speciesRouter.js');

const app = express();

app.use(express.json());
app.use('/species', species);
app.use(notFoundMiddleware);
app.use(errorMiddleware);

module.exports = app;
