const place = require('./place/place')
const wether = require('./wether/wether')

const argv = require('yargs').options({
    ubicacion : {
        alias : 'u',
        demand: true,
        desc: 'Ubicación para localizar el clima'
    }
}).argv

let result = {};

place.getLugarLatLog(argv.ubicacion)
    .then(res=>{ 
        result = res
        wether.getWether(res.latitud, res.longitud)
            .then(clima=>{
                result.temperatura = clima;

                console.log(result)
            })
        .catch(err=>{console.log(err)})
    })
    .catch(err=>{console.log(err)})
