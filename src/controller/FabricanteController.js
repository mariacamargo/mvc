const Fabricante = require('../model/Fabricante')

module.exports ={
    create : async (req,res)=> {
        await Fabricante.create(req.body)
        return res.redirect('/Fabricante')
    },
    list : async (_,res)=>{
        const FabricanteList = await Fabricante.findAll()
        return res.render('Fabricante/list',{FabricanteList})
    },
    form : (_,res) => res.render('Fabricante/form'),
}
