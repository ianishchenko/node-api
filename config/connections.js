module.exports = {
    development: {
        //for migrations
        username: process.env.API_DB_USER,
        //for sequelize
        user: process.env.API_DB_USER,
        password: process.env.API_DB_PASSWORD,
        database: process.env.API_DB_NAME,
        host: process.env.API_DB_HOST||'localhost',
        port: process.env.API_DB_PORT,
        dialect: process.env.API_DB_DRIVER||'postgres'
    }
};