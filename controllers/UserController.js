'use strict';

const {User} = require('../models');
const {AccessToken} = require('../models');
const Cookies = require('cookies');

module.exports = {

    /**
     *
     * @param req
     * @param res
     * @param next
     * @returns {Promise<void>}
     */
    find: async function (req, res, next) {
        try {
            res.send({data: await User.findAll()});
        } catch (err) {
            next(err);
        }
    },

    /**
     *
     * @param req
     * @param res
     * @param next
     * @returns {Promise<void>}
     */
    item: async function (req, res, next) {
        try {
            const params = req.params;

            res.send({data: await User.findOne({where: {id: params.id}})});
        } catch (err) {
            next(err);
        }
    },

    /**
     *
     * @param req
     * @param res
     * @param next
     * @returns {{}}
     */
    logout: async function (req, res, next) {
        const cookies = new Cookies(req, res);
        const accessToken = cookies.get('access_token');
        if(accessToken){
            try {
                const token  = await AccessToken.findOne({
                    where: {token: accessToken}
                });
                if(token){
                    token.destroy();
                }
            } catch (e) {
                next(e);
            }
            cookies.set('access_token', null);
        }

        res.status(204).send({});
    },

    /**
     *
     * @param req
     * @param res
     * @param next
     * @returns {{}}
     */
    googleCallback: async function (req, res, next) {
        const user = req.user;

        const hash = AccessToken.generateHash(user);
        try {
            const token = await AccessToken.create({
                token: hash
            });
            token.setUser(user);

            res.status(200).json({token: token.token});
        } catch (e){
            next(e);
        }
    }
};