'use strict';

const bcrypt = require('bcrypt-nodejs');

module.exports = (ORM, DataTypes) => {
    const AccessToken = ORM.define('AccessToken',
        {
            id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
            token: {type: DataTypes.STRING},
            expiresAt: {type: DataTypes.BIGINT, field: 'expires_at'}
        }, {
            tableName: 'access_tokens',
            underscored: true
        }
    );

    // generating a hash
    AccessToken.generateHash = (someString) => {
        return bcrypt.hashSync(someString, bcrypt.genSaltSync(8), null);
    };

    AccessToken.beforeCreate(access_token => {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 1);
        return access_token.expiresAt = currentDate.getTime();
    });

    AccessToken.associate = function (models) {
        models.AccessToken.belongsTo(models.User);
    };

    return AccessToken;
};
