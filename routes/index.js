'use strict';

const express = require('express'),
    router = express.Router(),
    { routes } = require('../config');

for (let route in routes) {
    const [method, path] = route.split(' '),
        routeConfig = routes[route];
    if('middleware' in routeConfig){
        if(!Array.isArray(routeConfig.middleware)){
            routeConfig.middleware = [routeConfig.middleware];
        }
    } else {
        routeConfig.middleware = [];
    }
    routeConfig.middleware.push(require(`../controllers/${routeConfig.controller}`)[routeConfig.action]);
    router[method.toLowerCase()](path, ...routeConfig.middleware);
}

module.exports = router;
