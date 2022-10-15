const Sequelize = require('sequelize');

const sequelize = require('../../db/mysqlconnection');

const User = sequelize.define('User',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        alloNull:false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    password:{
        type:Sequelize.STRING,
        alloNull:false
    },
    email:{
        type: Sequelize.STRING,
        alloNull:false
    }

})

module.exports=User;