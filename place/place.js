const axios = require('axios');

const getLugarLatLog = async ( direccion ) => {

    const encodedURL = encodeURI( direccion )

    let instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        timeout: 1000,
        headers: {
            'x-rapidapi-key' : '3eb5f73905msh42cbd597b034348p149c4ejsn049baec7024f'
        }
    })
    
    const respuesta = await instance.get()

    if(respuesta.data.Results.length === 0 ) throw new Error(`No hay resultados para ${ direccion}`)

    const data = respuesta.data.Results[0];
    const ubicacion = data.name;
    const latitud = data.lat;
    const longitud = data.lon;

    return {
        ubicacion,
        latitud,
        longitud
    }

}

module.exports = {
    getLugarLatLog
}
