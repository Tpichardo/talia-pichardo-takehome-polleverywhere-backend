const db = require("../db/config");

const getAllRaffles = async () => {
	try {
		const allRaffles = await db.any("SELECT * FROM raffle");
		return allRaffles;
	} catch (error) {
		return error;
	}
};

const getRaffleById = async (id) => {
	try {
		const raffle = await db.one("SELECT * FROM raffle WHERE id = $1", id);
		return raffle;
	} catch (error) {
		return error;
	}
};

module.exports = { getAllRaffles, getRaffleById };
