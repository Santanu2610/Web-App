const request = require('request')

const forecast = (latitude, longitude, callback) => {
    //const url = 'http://api.weatherstack.com/current?access_key=14361d625407eed6c8146f4b892a581d' + latitude + ',' + longitude
    const url ='http://api.weatherstack.com/current?access_key=14361d625407eed6c8146f4b892a581d&query='+ latitude + ',' + longitude
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,'It feels like '+ body.current.feelslike + ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip+ '% chance of rain.')
        }
    })
}

module.exports = forecast