import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

let db;
try {
  db = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  });
  console.log(`Db Connected`);
} catch (error) {
  console.log(`mySql Error:-,${error}`);
}

export default db;
