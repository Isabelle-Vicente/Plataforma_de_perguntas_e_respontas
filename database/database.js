const Sequelize = require('sequelize');

const connection = new Sequelize('plataformaperguntas','root','3103',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;