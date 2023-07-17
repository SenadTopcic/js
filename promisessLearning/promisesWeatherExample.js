function getWeather() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve('Cloucdy')
    }, 100);
  });
}

function getWeatherIcon(weather){
  return new Promise(function(resolve, reject){
    setTimeout(() => {
      switch (weather) {
        case 'Sunny':
          resolve('☀️')
          break;
        case 'Cloudy':
          resolve('😶‍🌫️')
          break;
        case 'Rainy':
          resolve('🌧️')
          break;
        default:
          reject('NO ICON FOUND')
      }
    }, 100)
    })
}

const onSuccess = (data) =>
  console.log(`Weather is ${data}`);
  
const onReject = (error) => 
  console.log(`Error: ${error}`);

getWeather()
.then(getWeatherIcon)
.then(onSuccess, onReject);
