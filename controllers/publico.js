//express
const express = require("express")
const publico = express()

//model produto
const ModelProduto = require("../models/produto")


//rotas
publico.get("/", function(req, res){
    ModelProduto.findAll().then(function(produtos){
        try {
            res.send(produtos)
        } 
        catch(erro) {
            console.log(erro)
        }
    })
})

module.exports = publico