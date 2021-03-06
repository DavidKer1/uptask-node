const Proyectos = require("../models/Proyectos");
exports.proyectosHome = (req, res) => {
	res.render("index", {
		nombrePagina: "Proyectos",
	});
};

exports.formularioProyectos = (req, res) => {
	res.render("nuevoProyecto", {
		nombrePagina: "Nuevo Proyecto",
	});
};

exports.nuevoProyecto = async (req, res) => {
	const { nombre } = req.body;

	let errores = [];

	if (!nombre) {
		errores.push({ texto: "Agrega un nombre al proyecto" });
	}

	if (errores.length > 0) {
		res.render("nuevoProyecto", {
			nombrePagina: "Nuevo Proyecto",
			errores,
		});
		return;
	}
	const proyecto = await Proyectos.create({nombre})
	res.redirect('/')
	
};
