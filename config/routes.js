module.exports = {
    'GET /profile': {
        controller: 'UserController',
        action: 'find',
        middleware: 'auth'
    },

    'GET /users': {
        controller: 'UserController',
        action: 'find'
    },

    'GET /users/:id': {
        controller: 'UserController',
        action: 'item'
    },
};