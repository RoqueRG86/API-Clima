//const argv = require('./config/yargs');Pendiente optimizar
const lugar = require('./logic-config/lugar');
const clima = require('./clima/clima');

const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'Direccion de la ciudad',
            demand: true
        }
    }).argv;

//una Funcion async siempre regresa una promesa

/*Invocar las funciones de forma independiente

const coordenadas = lugar.getLugarLatLog(argv.direccion)
    .then(console.log).catch(console.log);
    
const infoClima = clima.getClima(31.490000, -107.459999)
    .then(console.log).catch(console.log);
    
*/

//Salida utlizando async -  await de manera que se mas sencilla
const getInfoClimaLugar = async(ubicacion) => {

    try {
        const coords = await lugar.getLugarLatLog(ubicacion);
        const infoClima = await clima.getClima(coords.lat, coords.log);
        return `El clima de ${coords.ubicacion} es de ${infoClima}.`;
    } catch (err) {
        return `No se pudo determinar el clima ${ubicacion}.`;
    }
};

//Invocar funcion principal
getInfoClimaLugar(argv.direccion)
    .then(console.log)
    .catch(console.log);