'use strict';

const Sequelize = require('sequelize'),
    { currentConnection } = require('../config'),
    fs = require('fs'),
    path = require('path'),
    fileName = path.basename(__filename);

const ORM = new Sequelize(currentConnection.database, currentConnection.user, currentConnection.password, currentConnection),
    models = {};

fs.readdirSync(__dirname)
    .filter(file => (file.indexOf('.') !== 0) && (file !== fileName) && (file.slice(-3) === '.js'))
    .forEach(file => {
        let model = ORM['import'](path.join(__dirname, file));
        models[model.name] = model;
    });

Object.keys(models).forEach(modelName => {
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
});

module.exports = models;