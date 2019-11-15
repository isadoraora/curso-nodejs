// const Sequelize = require('sequelize')
// const sequelize = new Sequelize('teste', 'root', 'isaisa', {
//     //o host serve pra dizer em qual máquina está nosso BD
//     host: "localhost",
//     dialect: "mysql"
// })

//verifica se conseguimos nos conectar ao BD. Sozinha ela não faz nada.
//then funciona como função de callback.
// sequelize.authenticate().then(function () {
//     console.log("Conectou com sucesso!")
// }).catch(function (erro) {
//     console.log("Falha ao se conectar! " + erro)
// })

// const Postagem = sequelize.define('postagens', {
//     titulo: {
//         //string tem limite de tamanho, e texto não
//         type: Sequelize.STRING
//     },
//     conteudo: {
//         type: Sequelize.TEXT
//     }
// })

// Postagem.create({
//     titulo: "O apanhador no campo de centeio",
//     conteudo: "uma linda estória"
// })

//essa função vai sincronizar o seu model com o mysql
// Postagem.sync({ force: true })
//o force = true é certeza que a tabela será gerada

// const Usuario = sequelize.define('usuarios', {
//     nome: {
//         type: Sequelize.STRING
//     },
//     sobrenome: {
//         type: Sequelize.STRING
//     },
//     idade: {
//         type: Sequelize.INTEGER
//     },
//     email: {
//         type: Sequelize.STRING
//     }
// })
// Usuario.sync({ force: true }) -- AQUI É SÓ QUANDO FOR CRIAR A TABELA, DPS COMENTA.
// Usuario.create({
//     nome: "Isadora",
//     sobrenome: "Mendonça",
//     idade: 30,
//     email: "isa.mdeo@gmail.com"
// })