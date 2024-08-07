const dotenv = require('dotenv');

dotenv.config();

module.exports = {

  development: {
    client: "mysql2",
    connection: {
      database: process.env.MYSQL_DATABASE,
      user: process.env.MYSQL_PASSWORD,
      password: process.env.MYSQL_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10
    },
  },

  staging: {
    client: "mysql2",
    connection: {
      database: process.env.MYSQL_DATABASE,
      user: process.env.MYSQL_PASSWORD,
      password: process.env.MYSQL_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10
    },
  },

  production: {
    client: "mysql2",
    connection: {
      database: process.env.MYSQL_DATABASE,
      user: process.env.MYSQL_PASSWORD,
      password: process.env.MYSQL_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10
    },
  }

};