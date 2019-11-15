const db = require('./db')

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})

//força a criar a tabela. É preciso lembrar de comentar dps de criada, ou sobreescreve
//Post.sync({ force: true })

module.exports = Post;