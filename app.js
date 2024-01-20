const express = require("express");

const app = express();

app.get("/", (request, response) => {
	response.status(200).send("Heyy, Welcome to the backend!");
});

module.exports = app;
