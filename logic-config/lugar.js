const axios = require('axios');
const getLugarLatLog = async(direccion) => {

    const encodedURL = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        // timeout: 1000,
        headers: { 'x-rapidapi-key': 'fb90f3157cmshc68fcf533011a81p19fc35jsnb097c0cc5659' }
    });

    /*Sin utilizar async - await
    instance.get().then(response => {
             console.log(response.data.Results[0]);
    }).
    catch(err => {
        console.log('Error WS', err);

    });*/

    //Forma optimizada a la anterior
    const resp = await instance.get();
    if (resp.data.Results.length === 0)
        throw new Error(`No se encontraron resultados para ${direccion}`);

    const data = resp.data.Results[0];
    const ubicacion = data.name;
    const lat = data.lat;
    const log = data.lon;

    return { ubicacion, lat, log };
};

module.exports = {
    getLugarLatLog
};