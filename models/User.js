'use strict';

const bcrypt   = require('bcrypt-nodejs');

module.exports = (ORM, DataTypes) => {
    const User = ORM.define('User',
        {
            id: {type: DataTypes.INTEGER, primaryKey: true},
            email: DataTypes.STRING,
            password: DataTypes.STRING
        }, {
            tableName: 'users',
            timestamps: false
        }
    );

    User.prototype.toJSON =  function () {
        const values = Object.assign({}, this.get());

        delete values.password;
        return values;
    };

    // generating a hash
    User.generateHash = function(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    };

    // checking if password is valid
    User.prototype.isValidPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };

    return User;
};
