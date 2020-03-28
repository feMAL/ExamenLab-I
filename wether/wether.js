const axios = require('axios')

const getWether = async (lat, long) => {
    if(!lat && !long){
        throw new Error('La latitud o la longitud no contienen valores')
    }else{
        const respuesta = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=67b5729005ffe46645219dc88b0a6104&units=metric`)
        
        return respuesta.data.main.temp;
    }
}

module.exports = {
    getWether   
}