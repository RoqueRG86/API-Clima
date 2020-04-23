const axios = require('axios');

const getClima = async(lat, log) => {

    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=cebff65228cb8eb0b198f45435c80a4a&units=metric`);
    return response.data.main.temp;
};

module.exports = {
    getClima
};