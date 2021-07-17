const express = require("express");
const proyectosController = require("../controllers/proyectosController");
const router = express.Router();

module.exports = function () {
	router.get("/", proyectosController.proyectosHome);
	
	return router;
};
