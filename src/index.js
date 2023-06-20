const express = require('express')

const path = require('path')

// ____________ Controladores ____________
const ProductController = require('./controller/ProductController')
const HomeController = require('./controller/HomeController')
const FabricanteController = require('./controller/FabricanteController')

// ____________ Configurações Service ____________
const app = express()

app.listen(8080,() => {
    console.log('Serviço Executando ..... Disponível em http://localhost:8080')
    console.log('Para fializar, pressione CTRL+C')
})

app.set('view engine', 'pug')
app.set('views', path.resolve(__dirname,'views'))
app.use(express.urlencoded({
    extended:true
}))


// ____________ Rotas ____________
app.get('/',HomeController.home)
app.get('/total',HomeController.total)

app.get('/products',ProductController.list)
app.get('/products/form',ProductController.form)
app.post('/products/create',ProductController.create)

app.get('/fabricante',FabricanteController.list)
app.get('/fabricante/form',FabricanteController.form)
app.post('/fabricante/create',FabricanteController.create)


// ____________ Execução ____________