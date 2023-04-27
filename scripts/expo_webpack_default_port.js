const fs = require('fs');
require('dotenv').config();

//FUNCIONAL CON expo ~48.0.9
const PORT = process.env.PORT;
const filePath =
  './node_modules/@expo/cli/build/src/start/server/webpack/WebpackBundlerDevServer.js';

// Lee el contenido del archivo
fs.readFile(filePath, 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }

  // Reemplaza el valor que deseas cambiar por otro valor
  const regex = /options\.defaultPort\) \!= null \? ref : \d+;/g;

  // Reemplazar el valor del puerto con el valor de la variable PORT
  const newData = data.replace(
    regex,
    `options.defaultPort) != null ? ref : ${PORT};`
  );

  // const regex = `const defaultPort = (ref = options == null ? void 0 : options.defaultPort) != null ? ref : 19006;`

  // const newData = data.replace(/19006/g, PORT);

  // Escribe el nuevo contenido en el archivo
  fs.writeFile(filePath, newData, 'utf8', function (err) {
    if (err) {
      return console.log(err);
    }
    console.log('El archivo ha sido modificado exitosamente.');
  });
});
