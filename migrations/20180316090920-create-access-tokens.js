'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('access_tokens', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            user_id: {
                type: Sequelize.INTEGER
            },
            token: {type: Sequelize.STRING},
            expires_at: {
                type: Sequelize.BIGINT
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            }
        }).then(() =>
            queryInterface.addConstraint('access_tokens', ['user_id'], {
                type: 'foreign key',
                name: 'user_access_token_constraint',
                references: {
                    table: 'users',
                    field: 'id'
                },
                onDelete: 'cascade',
                onUpdate: 'cascade'
            })
        );

    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('access_tokens').then(() =>
            queryInterface.removeConstraint('access_tokens', 'user_access_token_constraint')
        );
    }
};