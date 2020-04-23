const direccion = {
    alias: 'd',
    desc: 'Direccion de la ciudad',
    demand: true

};

const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'Direccion de la ciudad',
            demand: true
        }
    }).argv;