const axios = require('axios');

const getAddressLatLng = async (location) => {

    let resp = await getRequest(location);
    
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`There's no results for the location.`)
    }
    
    let result = resp.data.results[0];
    
    return fetchDataFromLocation(result);
    
}

const getRequest = async (location) => {
    
    let encodedLocation = encodeURI(location);
    
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedLocation}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`);

    return resp;
}

const fetchDataFromLocation = (location) => {
    return {
        address: location.formatted_address,
        lat: location.geometry.location.lat,
        lng: location.geometry.location.lng,
    }
}

module.exports = {
    getAddressLatLng
}