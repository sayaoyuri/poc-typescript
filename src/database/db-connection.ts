import pg from 'pg';

const { Pool } = pg;

const configDatabase = {
  connectionString: 'postgres://postgres:postgres123@localhost:5432/poc_typescript'
};

export const db = new Pool(configDatabase);