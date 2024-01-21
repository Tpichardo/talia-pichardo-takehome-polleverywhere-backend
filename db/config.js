const pgp = require("pg-promise")();
require("dotenv").config();

const { PG_HOST, PG_PORT, PG_DB, PG_USER } = process.env;

const connectionObject = {
	host: PG_HOST,
	port: PG_PORT,
	database: PG_DB,
	user: PG_USER,
};

const database = pgp(connectionObject);

module.exports = database;
