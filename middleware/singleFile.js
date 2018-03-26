'use strict';

const limits = {fileSize: 100000};

const accept = ['image/jpeg', 'image/png'];

const fileFilter = function (req, file, cb) {
    if (!~accept.indexOf(file.mimetype)) {
        cb(new Error('Wrong mime type!'))
    }
    cb(null, true);
};

const upload = require('./files/')(limits, fileFilter);

module.exports = function (req, res, next) {
    upload.single('file')(req, res, next);
};