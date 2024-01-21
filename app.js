const express = require("express");
const cors = require("cors");

const rafflesController = require("./controllers/rafflesController");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
	response.status(200).send("Heyy, Welcome to the backend!");
});

app.use("/raffles", rafflesController);

app.get("*", (resquest, response) => {
	response.status(404).send("Sorry, Page Not Found :(");
});

module.exports = app;
