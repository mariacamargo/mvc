const {Sequelize, DataTypes, Model} = require('sequelize')
const path = require('path')

const sequelize = new Sequelize ({
    dialect:'sqlite',
    storage:path.resolve(__dirname,'..','..','db.sqlite1')
})

const Product = sequelize.define('Product',{
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

Product.sync()

module.exports = Product