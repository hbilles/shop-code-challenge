const fs        = require('fs')
const path      = require('path')
const Sequelize = require('sequelize')
const env       = process.env.NODE_ENV || 'development'
const config    = require(path.join(__dirname, '../config.js'))(env)
const sequelize = new Sequelize(config)

sequelize.sync({
	force: true
})

const models = [
	'products'
]

models.forEach(function(model) {
	module.exports[model] = sequelize.import(path.join(__dirname, model))
})

module.exports.sequelize = sequelize
