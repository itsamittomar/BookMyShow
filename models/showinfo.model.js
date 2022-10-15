const Sequelize = require('sequelize');

const sequelize = require('../db/mysqlconnection');

const ShowInfo = sequelize.define('ShowsInfo',{
    ShowId:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    showName:{
        type:Sequelize.STRING,
        allowNull:false
    },
    showCity:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    Address:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports=Merchant;