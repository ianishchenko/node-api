'use strict';

const express = require('express'),
    bodyParser = require('body-parser'),
    helmet = require('helmet'),
    cors = require('cors'),
    // passport = require('passport'),
    compression = require('compression');

const app = express();

if (process.env.NODE_ENV === undefined || process.env.NODE_ENV !== 'production') {
    let config = require('dotenv').config();

    if (config.error) {
        console.error('Can not load environment variables from .env file');
        throw new Error(config.error);
    }
}

const Router = require('./routes');

// app.use(passport.initialize());
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(Router);

app.use(function (req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    console.log(new Date().toLocaleString(), err);

    if (res.headersSent) {
        return next(err);
    }

    res.status(err.status || 500).send({ message: err.message || 'Something went wrong', status: err.status });

    next();
});

const { API_PORT = 3000 } = process.env;

app.listen(API_PORT, () => console.log(`Listening API on port ${API_PORT}`));