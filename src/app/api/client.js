import { Pool } from 'pg';

module.exports = new Pool({
  database: 'postgres',
  user: 'postgres',
  password: 'js4life',
  host: '172.23.106.68',
  port: 5432,
});