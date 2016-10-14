const Sequelize = require('sequelize')

// This model is ephemeral.
// Each time the app starts the existing data and table structure is reset.
module.exports = (sequelize, DataTypes) => {
	var Products = sequelize.define('products', {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
			primaryKey: true,
			unique: true
		},
		title: {
			type: Sequelize.STRING,
			allowNull: false
		},
		price: {
			type: Sequelize.FLOAT,
			allowNull: false
		},
		inventory: {
			type: Sequelize.INTEGER,
			allowNull: false
		}
	})

	return Products
}
