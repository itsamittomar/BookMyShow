const Sequelize = require('sequelize');

const sequelize = require('../db/mysqlconnection');

const Merchant = sequelize.define('MerchantDetails',{
    MerchantId:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    MerchantName:{
        type:Sequelize.STRING,
        allowNull:false
    },
    MerchantPhoneNumber:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    MerchantAddress:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports=Merchant;