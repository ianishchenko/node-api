'use strict';

module.exports = {

    /**
     *
     * @param req
     * @param res
     * @param next
     * @returns {Promise<void>}
     */
    uploadUserFile: async function (req, res, next) {
        try {
            // TODO: save file to db
            res.send({});
        } catch (err) {
            next(err);
        }
    }
};