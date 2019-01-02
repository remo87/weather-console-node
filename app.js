const argv = require('./config/yargs').argv;
const { getAddressLatLng } = require('./places/places');
const { getTemp } = require('./weather/weather');

const getInfo = async (location) => {
    try {
        const locInfo = await getAddressLatLng(location);
        const temp = await getTemp(locInfo.lat, locInfo.lng);

        return `The temperature in ${locInfo.address} is ${temp} degrees Celsius`;
    } catch (error) {
        throw new Error(`The temperature for ${location} could not be determined.`);
    }
}

getInfo(argv.location)
    .then(resp => console.log(resp))
    .catch(err => console.log(err.message))