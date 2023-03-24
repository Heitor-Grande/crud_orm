//database
const database = require("../db/dbconnection")

//sequelize
const sequelize = require("sequelize")

//model produto
const produto = database.define("produtos", {
    nome:{
        type: sequelize.TEXT
    },
    preco: {
        type: sequelize.REAL
    },
    estoque: {
        type: sequelize.INTEGER
    }
})

module.exports = produto