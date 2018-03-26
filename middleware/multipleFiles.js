'use strict';

const upload = require('./files/');

module.exports = function (req, res, next) {
    upload.array('files')(req,res,next);
};