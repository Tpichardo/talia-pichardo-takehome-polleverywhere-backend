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

const getAllRaffleParticipants = async (id) => {
	try {
		const raffleParticipants = await db.any(
			"SELECT * FROM participant WHERE raffle_id = $1",
			id
		);
		return raffleParticipants;
	} catch (error) {
		return error;
	}
};
const createRaffle = async (newRaffle) => {
	const { raffle_name, secret_token } = newRaffle;

	try {
		const raffle = await db.one(
			"INSERT INTO raffle (raffle_name, secret_token, date_created) VALUES($1, crypt($2, gen_salt('bf')), CURRENT_TIMESTAMP) RETURNING *",
			[raffle_name, secret_token]
		);
		return raffle;
	} catch (error) {
		return error;
	}
};

const addParticipantToRaffle = async (newParticipant) => {
	const { first_name, last_name, email, phone_number, raffle_id } =
		newParticipant;
	try {
		const participant = await db.one(
			"INSERT INTO participant (first_name, last_name, email, phone_number, raffle_id) VALUES($1, $2, $3, $4, $5) RETURNING*",
			[first_name, last_name, email, phone_number, raffle_id]
		);
		return participant;
	} catch (error) {
		return error;
	}
};

module.exports = {
	getAllRaffles,
	getRaffleById,
	getAllRaffleParticipants,
	createRaffle,
	addParticipantToRaffle,
};
