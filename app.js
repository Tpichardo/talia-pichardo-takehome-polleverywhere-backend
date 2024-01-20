const express = require("express");

const app = express();

app.get("/", (request, response) => {
	response.status(200).send("Heyy, Welcome to the backend!");
});

app.get("*", (resquest, response) => {
	response.status(404).send("Sorry, Page Not Found :(");
});

module.exports = app;
