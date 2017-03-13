// /config/dev.js

module.exports = {
  db: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './mydb.sqlite',
    },
    migrations: {
      directory: './data/migrations',
    },
  },
};
