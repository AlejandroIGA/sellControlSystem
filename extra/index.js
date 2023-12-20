//Creación de servidor con http
const http = require('node:http');
const findAvailablePort = require('./free-port.js');

const server = http.createServer((req, res) => {
  console.log('request received');
  res.end('Hola mundo');
});

/*Al usar el puerto 0 toma el primer puerto que encuentre libre
server.listen(0, () => {
  console.log(`Server listening on port ${server.address().port}`);
});
*/

findAvailablePort(3000).then((port) => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`);
  });
});
