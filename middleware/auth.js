'use strict';

// const LocalStrategy   = require('passport-local').Strategy, User = require('../models/User');


module.exports = function (req, res, next) {
    // if (req.isAuthenticated())
    //     return next();
    console.log('AUTH!!!!');
    next();
    // if they aren't redirect them to the home page
    // res.redirect('/');
};