'use strict';

// const LocalStrategy   = require('passport-local').Strategy, User = require('../models/User');

module.exports = function (req, res, next) {
    // const err = new Error('Unauthorize');
    // err.status = 401;
    // next(err);
    next();
};