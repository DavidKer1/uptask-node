const express = require("express");
const proyectosController = require("../controllers/proyectosController");
const router = express.Router();

module.exports = function () {
	router.get("/", proyectosController.proyectosHome);
	router.get('/nuevo-proyecto', proyectosController.formularioProyectos)
	router.post('/nuevo-proyecto', proyectosController.nuevoProyecto)
	return router;
};
