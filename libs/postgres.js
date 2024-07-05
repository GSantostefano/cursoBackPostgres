const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'gacho',
    password: 'admin123',
    database: 'db_gacho_store',
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
