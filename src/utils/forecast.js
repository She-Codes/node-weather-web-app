const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/69c7f8baf261e8eb8a8050344a5b4e9e/${latitude},${longitude}`

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service')
    } else if (body.error) {
      callback('Unable to find location')
    } else {
      callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability * 100}% chance of rain. Humidity is currently ${body.currently.humidity * 100}%.`)
    }
  })
}

module.exports = forecast