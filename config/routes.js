module.exports = {
    'GET /profile': {
        controller: 'UserController',
        action: 'find',
        middleware: 'isLoggedIn'
    },

    'GET /users': {
        controller: 'UserController',
        action: 'find',
        middleware: 'isLoggedIn'
    },

    'GET /users/:id': {
        controller: 'UserController',
        action: 'item',
        middleware: 'isLoggedIn'
    },

    'GET /logout': {
        controller: 'UserController',
        action: 'logout'
    },

    'POST /auth/google': {
        controller: 'UserController',
        action: 'googleCallback',
        middleware: 'googleSignIn'
    },

    'POST /files/upload/users/:user_id' :{
        controller: 'FileController',
        action: 'uploadUserFile',
        middleware: 'singleFile'
    }
};