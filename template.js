const getTemplateProducts = (name, category) => {
    const templateProducts =
    `
        <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Mi tienda</title>
                </head>
                <body>
                    <nav>
                        <a href="/">Home</a> |
                        <a href="/electronica">Electrónica</a> |
                        <a href="/ropa">Ropa</a> |
                        <a href="/hogar">Hogar</a>
                    </nav>
                    <h1>Productos de ${category}</h1>
                    <h3>Número total de productos: ${name.length}</h3>
                    <ul>
                        ${name.map(product => 
                            `
                                <li>
                                  <h3>Nombre: ${product.name}</h3>
                                  <p>Precio: ${product.price} €</p>
                                  <p>Cantidad en stock: ${product.stock} unds.</p>
                                </li>
                            `).join('')}
                    </ul>
                </body>
            </html>
    `;
return templateProducts;
}

module.exports = getTemplateProducts;












