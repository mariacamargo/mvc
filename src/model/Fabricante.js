const {Sequelize, DataTypes, Model} = require('sequelize')
const path = require('path')

const sequelize = new Sequelize ({
    dialect:'sqlite',
    storage:path.resolve(__dirname,'..','..','db.sqlite2')
})

const Fabricante = sequelize.define('Fabricante',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    name:{
        type:DataTypes.STRING(120),
        allowNull:false,
    }
})

Fabricante.sync()

module.exports = Fabricante