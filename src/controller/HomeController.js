const Fabricante = require('../model/Fabricante')
const Product = require('../model/Product')


module.exports = {
    home: (_,res) => res.render('index'),

    total:async (_,res)=> {
        const FabricanteList = await Fabricante.findAll()
        const productsList = await Product.findAll()
        return res.render('total',{FabricanteList,productsList})
    },
}