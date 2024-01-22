const express = require("express");
const {
	getAllRaffles,
	getRaffleById,
	getAllRaffleParticipants,
	createRaffle,
} = require("../queries/raffles");

const raffles = express.Router();

raffles.get("/", async (request, response) => {
	try {
		const allRaffles = await getAllRaffles();
		response.status(200).json(allRaffles);
	} catch (error) {
		return error;
	}
});

raffles.get("/:id", async (request, response) => {
	const { id } = request.params;
	try {
		const raffle = await getRaffleById(id);
		response.status(200).json(raffle);
	} catch (error) {
		return error;
	}
});

raffles.get("/:id/participants", async (request, response) => {
	const { id } = request.params;
	try {
		const participants = await getAllRaffleParticipants(id);
		response.status(200).json(participants);
	} catch (error) {
		return error;
	}
});

raffles.post("/", async (request, response) => {
	try {
		const newRaffle = await createRaffle(request.body);
		if (newRaffle.id) {
			response.json(newRaffle);
		}
	} catch (error) {
		return error;
	}
});

module.exports = raffles;
