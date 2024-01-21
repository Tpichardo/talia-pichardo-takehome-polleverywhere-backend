const express = require("express");
const { getAllRaffles } = require("../queries/raffles");

const raffles = express.Router();

raffles.get("/", async (request, response) => {
	try {
		const allRaffles = await getAllRaffles();
		response.status(200).json(allRaffles);
	} catch (error) {
		return error;
	}
});

module.exports = raffles;
