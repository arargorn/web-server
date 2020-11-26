//'use strict';

const http = require('http');

const host = 'localhost';
const port = 8080;

requestListener = function(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let salida = {
        nombre: 'Josep Lluís',
        edad: 35,
        url: req.url
    };

    res.write(JSON.stringify(salida));
    res.end();
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});


console.log('Escuchando el puerto 8080');