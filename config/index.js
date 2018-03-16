'use strict';

const { NODE_ENV = 'development' } = process.env;

const deepmerge = require('deepmerge');

const connections = require('./connections'),
    auth = require('./auth'),
    routes = require('./routes'),
    environment = require(`./env/${NODE_ENV}`);

const appConfig = {};

class Config {

    load() {
        appConfig.connections = deepmerge(connections, this.getEnvironmentConfig('connections'));
        appConfig.auth = deepmerge(auth, this.getEnvironmentConfig('auth'));
        appConfig.routes = routes;
    }

    getEnvironmentConfig(name) {
        return environment[name] || {};
    }

    get connections() {
        return appConfig.connections;
    }

    get routes() {
        return appConfig.routes;
    }

    get currentConnection() {
        return appConfig.connections[NODE_ENV]
    }

    get configAuth() {
        return appConfig.auth;
    }
}

let config = new Config();

config.load();

module.exports = config;