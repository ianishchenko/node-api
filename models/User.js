'use strict';

module.exports = (ORM, DataTypes) => {
    const User = ORM.define('User',
        {
            id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
            email: DataTypes.STRING,
            firstName: {type: DataTypes.STRING, field: 'first_name'},
            lastName: {type: DataTypes.STRING, field: 'last_name'},
            googleId: {type: DataTypes.STRING, field: 'google_id'},
        }, {
            tableName: 'users',
            underscored: true
        }
    );

    process.nextTick(() => {
        const {AccessToken} = require('./');
        User.hasMany(AccessToken);
    });

    return User;
};
