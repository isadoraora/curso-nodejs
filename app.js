// var http = require('http');

// http.createServer(function (req, res) {
//     res.end("Olá")
// }).listen(8081);

// console.log("Servidor rodando!")

const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/posts')
//const Sequelize = require('sequelize')


//Config
//Template Engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
//main é o template padrão da aplicação
app.set('view engine', 'handlebars')

//Body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//conexão com o banco de dados
// const sequelize = new Sequelize('teste', 'root', 'isaisa', {
//     //o host serve pra dizer em qual máquina está nosso BD
//     host: "localhost",
//     dialect: "mysql"
// })

//rotas, na abaixo estamos renderizando 
app.get('/', function (req, res) {
    Post.findAll().then(function (posts) {
        res.render('home', { posts: posts })
    })

})
app.get('/cad', function (req, res) {
    res.render('formulario')
})

app.post('/add', function (req, res) {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function () {
        res.redirect('/')
    }).catch(function (erro) {
        res.send(`HOue um erro ` + erro)
    })
    // res.send("Texto: " + req.body.titulo + " Conteudo:" + req.body.conteudo)
})

app.get('/deletar/:id', function (req, res) {
    Post.destroy({ where: { 'id': req.params.id } }).then(function () {
        res.send("Postagem deletada com sucesso!")
    }).catch(function (erro) {
        res.send("não rolou")
    })
})

app.listen(8000, function () {
    console.log("Servidor rodando!")
})