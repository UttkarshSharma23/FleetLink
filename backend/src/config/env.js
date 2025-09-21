require('dotenv').config();

const env = {
    PORT: process.env.PORT || 5000,
    DB_URI: process.env.DB_URI || 'mongodb://localhost:27017/fleetlink',
    NODE_ENV: process.env.NODE_ENV || 'development',
};

module.exports = env;