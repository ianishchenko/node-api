'use strict';

const Cookies = require('cookies');
const {AccessToken} = require('../models');

function errorFunc(next) {
    const err = new Error('Unaothorized');
    err.status = 401;
    next(err);
}

module.exports = async function (req, res, next) {
    const cookies = new Cookies(req, res);
    const accessToken = cookies.get('access_token');
    if (accessToken) {
        try {
            let currentDate = (new Date()).getTime();
            const token = await AccessToken.findOne({
                where: {token: accessToken, expiresAt: {gt: currentDate}}
            });
            if (!token) {
                cookies.set('access_token', null);
                errorFunc(next)
            } else {
                next();
            }
        } catch (e) {
            errorFunc(next)
        }
    } else {
        errorFunc(next)
    }
};