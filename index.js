//express
const express = require("express")
const app = express()

//porta
app.listen("8080", function(){
    console.log("servidor rodando")
})

//body-parser
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: false}))

//database
const dbconnection = require("./db/dbconnection")
dbconnection.authenticate().then(function(){
    try{
        console.log("Conectado ao db com sucesso")
    } 
    catch (error){
        console.log("Erro ao conectar ao db: " + error)
    }
})

//rotas
    //publico
const publico = require("./controllers/publico")
app.get("/", publico)

    //produto
const produto = require("./controllers/produto")
app.post("/Add", produto)
app.get("/Get/:id_produto", produto)
app.delete("/Del:id_produto", produto)
app.put("/Up/:id_produto", produto)
app.patch("/Up/preco/:id_produto", produto)