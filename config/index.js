'use strict';

const { NODE_ENV = 'development' } = process.env;

const deepmerge = require('deepmerge');

const connections = require('./connections'),
    routes = require('./routes'),
    environment = require(`./env/${NODE_ENV}`);

const appConfig = {};

class Config {

    load() {
        appConfig.connections = deepmerge(connections, this.getEnvironmentConfig('connections'));
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
        return appConfig.connections[process.env.API_DB_DRIVER]
    }
}

let config = new Config();

config.load();

module.exports = config;