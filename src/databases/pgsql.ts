import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pg;
const DATABASE_URL = process.env.DATABASE_URL;


const databaseConfig = {
    connectionString: DATABASE_URL
};


const postgres = new Pool(databaseConfig);
postgres.connect();

export default postgres;