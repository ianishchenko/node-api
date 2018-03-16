'use strict';

const passport = require('passport');

module.exports = function (req, res, next) {
    passport.authenticate('google-id-token',{ session: false })(req, res, next);
};