const Pool = require('pg').Pool;
require('dotenv').config()

const pool = new Pool({
  user: "postgres",
  password: process.env.DATABASE_PASSWORD,
  host: "localhost",
  port: 5432,
  database: "trickysusan"
});

module.exports = pool;