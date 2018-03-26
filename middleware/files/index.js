'use strict';

const multer = require('multer');
const storage = multer.diskStorage({
    destination: 'files/',
    filename(req, file, next) {
        next(null, `${(new Date()).getTime()}-${file.originalname}`);
    }
});

module.exports = function (limits, fileFilter) {
    return multer({storage, limits: limits, fileFilter: fileFilter});
};