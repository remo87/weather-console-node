const argv = require('yargs').options({
    location: {
        alias: 'l',
        desc: 'Location to query the weather from.',
        demand: true
    }
}).argv;

module.exports = {
    argv
}