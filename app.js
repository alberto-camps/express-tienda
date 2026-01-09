const express = require('express');
const templateHome = require('./home.js')
const getTemplateProducts = require('./template.js');
const productsData = require('./products-data.js');

const app = express();
const PORT = 3000;

//Filtros

const categoryFilter = (category) => productsData.filter(product => product.category === category)




app.get('/', (req, res) => {
  res.send(templateHome());
});



app.get('/electronica', (req, res) => {
    const category = 'electrónica';
    const products = categoryFilter('electrónica');
    res.send(getTemplateProducts(products, category) );

})

app.get('/ropa', (req, res) => {
    const category = 'ropa';
    const products = categoryFilter('ropa');
    res.send(getTemplateProducts(products, category) );
})

app.get('/hogar', (req, res) => {
    const category = 'hogar';
    const products = categoryFilter('hogar');
    res.send(getTemplateProducts(products, category) );
})

app.get('/productos', (req, res) => {
    const category = 'Todos los productos';
    const products = productsData;
    res.send(getTemplateProducts(products, category) );
});



app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
