'use strict';

const { User } = require('../models');

module.exports = {

    /**
     * Find all users
     */
    find: async function (req, res, next) {
        try {
            res.send({ data: await User.findAll() });
        } catch (err) {
            next(err);
        }
    },

    /**
     * Find user item
     */
    item: async function (req, res, next) {
        try {
            const params = req.params;

            res.send({ data: await User.findOne({ where: { id: params.id } }) });
        } catch (err) {
            next(err);
        }
    }
};