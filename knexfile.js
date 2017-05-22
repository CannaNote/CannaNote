'use strict';

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/cannanote_dev',
    migrations : {
      directory: __dirname + '/src/server/migrations'
    },
    seeds: {
      directory: __dirname + '/src/server/seeds/dev'
    }
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/cannanote_test',
    migrations : {
      directory: __dirname + '/src/server/migrations'
    },
    seeds: {
      directory: __dirname + '/src/server/seeds/test'
    }
   },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations : {
      directory: __dirname + '/src/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/server/db/seeds/production'
    }
   },

};
