const axios = require('axios');

const getTemp = async (lat, lng) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=87bc29d43ff462c08b82c619251ec4b5`;
    let resp = await axios.get(url);
    let temp = resp.data.main.temp;
    return temp;
}

module.exports = {
    getTemp
}