const Sequelize = require('sequelize')

//conexão com o BD mysql
const sequelize = new Sequelize('postagens', 'root', 'isaisa', {
    //o host serve pra dizer em qual máquina está nosso BD
    host: "localhost",
    dialect: "mysql"
})

//exportando as duas variaveis criadas acima, para nossa app.
module.exports = {
    Sequelize : Sequelize,
    sequelize : sequelize
}