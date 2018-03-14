module.exports = {
    postgres: {
        host: process.env.API_DB_HOST,
        port: process.env.API_DB_PORT,
        user: process.env.API_DB_USER,
        password: process.env.API_DB_PASSWORD,
        database: process.env.API_DB_NAME,
        dialect: 'postgres'
    },
    mysql: {
        host: process.env.API_DB_HOST,
        port: process.env.API_DB_PORT,
        user: process.env.API_DB_USER,
        password: process.env.API_DB_PASSWORD,
        database: process.env.API_DB_NAME,
        dialect: 'mysql'
    }
};