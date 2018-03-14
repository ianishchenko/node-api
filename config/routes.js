module.exports = {
    // 'GET /profile': {
    //     controller: 'UserController',
    //     action: 'find',
    //     middleware: require('../middleware/Auth')
    // },

    'GET /users': {
        controller: 'UserController',
        action: 'find'
    },

    'GET /users/:id': {
        controller: 'UserController',
        action: 'item'
    },
};