const getTemplateHome = () => {
    const templateHome =
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
                    <h1>Bienvenido a nuestra tienda en línea</h1>
                    <p>Explora <a href="/productos">aquí</a> todos los productos</p>
                    
                </body>
            </html>
    `;
return templateHome;
}

module.exports = getTemplateHome;