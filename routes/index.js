const express = require("express");
const proyectosController = require("../controllers/proyectosController");
const router = express.Router();

const { body } = require('express-validator')

module.exports = function () {
	router.get("/", proyectosController.proyectosHome);
	router.get('/nuevo-proyecto', proyectosController.formularioProyectos)
	router.post('/nuevo-proyecto', 
		body('nombre').not().isEmpty().trim().escape(),
		proyectosController.nuevoProyecto
	)
	return router;
};
