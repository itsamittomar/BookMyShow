const Sequelize = require('sequelize');

const sequelize = require('../db/mysqlconnection');

const Movies = sequelize.define('MoviesDetails',{
    Movieid:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        alloNull:false,
        primaryKey:true
    },
    MovieName:{
        type:Sequelize.STRING,
        allowNull:false
    },
    DateOfRelease:{
        type:Sequelize.DATEONLY,
        alloNull:false
    },
    MovieTypes:{
        type: Sequelize.STRING,
        alloNull:false
    },
    MovieLanguage:{
        type:Sequelize.STRING,
        alloNull:false
    }

})

module.exports=Movies;