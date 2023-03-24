//express
const express = require("express")
const produto = express()

//model produto
const ModelProduto = require("../models/produto")

//post
produto.post("/Add", function(req, res){

    let {nome, preco, estoque} = req.body

    ModelProduto.create({
        nome: nome, 
        preco: preco,
        estoque: estoque
    }).then(function(){
        res.redirect("/")
    })
})

//get Espc
produto.get("/Get/:id_produto", function(req, res){
    let id_produto = req.params.id_produto

    ModelProduto.findAll({where: {
        id: id_produto
    }}).then(function(produto){
        try {
            res.send(produto)
        } 
        catch (erro) {
            
        }
    })
})

//delete
produto.delete("/Del:id_produto", function(req, res){

    let id_produto = req.params.id_produto

    ModelProduto.destroy({where: {
        id: id_produto
    }}).then(function(){
        try {
            res.redirect("/")
        } 
        catch(erro) {
            
        }
    })
})

//update
produto.put("/Up/:id_produto", function(req, res){
    let id_produto = req.params.id_produto

    let new_nome = req.body.new_nome
    let new_preco = req.body.new_preco
    let new_estoque = req.body.new_estoque

    ModelProduto.update({
        nome: new_nome,
        preco: new_preco,
        estoque: new_estoque
    },
    {where: {id: id_produto}}).then(function(){
        try {
            res.redirect(`/Get/${id_produto}`)
        } catch (error) {
            
        }
    })
})

//update produto preco
produto.patch("/Up/preco/:id_produto", function(req, res){
    let id_produto = req.params.id_produto
    
    let new_preco = req.body.new_preco

    console.log(new_preco)

    ModelProduto.update({preco: new_preco}, 
        {where: {id: id_produto}}).then(function(){
            try{
                res.redirect(`/Get/${id_produto}`)
            }
            catch (erro){
            }
        })
})

module.exports = produto