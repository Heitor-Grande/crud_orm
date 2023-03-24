//sequelize
const sequelize = require("sequelize")
const database = new sequelize({
    dialect: "sqlite",
    storage: "./db/database.db"
})

module.exports = database