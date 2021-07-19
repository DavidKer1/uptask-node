const {DataTypes} = require('sequelize')
const db = require('../config/db')
const slug = require("slug")
const shortid = require('shortid')

const Proyectos = db.define('proyectos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: DataTypes.STRING,
  url:{
    type: DataTypes.STRING,
    unique: true
  }
}, {
  hooks: {
    beforeCreate(proyecto) {
      proyecto.url = slug(proyecto.nombre).toLocaleLowerCase() + shortid.generate()
    }
  }
})

module.exports = Proyectos