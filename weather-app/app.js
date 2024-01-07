const request = require("postman-request");
const { geocode } = require("./utils/geocode");
const forecast = require("./utils/forecast");

// const API_KEY = "28e64a384dd0252e3e3006bab56644cb";
// const lat = "12";
// const lon = "13";
// const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

// request(url, (error, response, body) => {
//   console.log("error:", error); // Print the error if one occurred
//   console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
//   //   console.log("body:", body);
//   const data = JSON.parse(body);
//   // console.log(data)

//   console.log(
//     `There is ${(data.main.temp - 273.15).toFixed(
//       2
//     )} degree celcius outside with ${data.main.humidity}% humidity`
//   );
// });

// GeoCoding -> finding lat and lon based upon address and then find the weather

// const BASE_URL = "http://api.positionstack.com/v1/forward";
// const GeoCodingAccessKey = "bbaefefe15cf31de650f0c515896739e";
// const address = "Gachibowli, Hyderabad";
// const URL = `${BASE_URL}?access_key=${GeoCodingAccessKey}&query=${address}`;

// let latitude;
// let longitude;
// request(URL, (error, response, body) => {
//   console.log("error:", error); // Print the error if one occurred
//   console.log("statusCode:", response.statusCode); // Print the response status code if a response was received
//   // //   console.log("body:", body);
//   // const data = JSON.parse(body);
//   // latitude = data.data[0].latitude;
//   // longitude = data.data[0].longitude;
//   // console.log(data);
//   findWeatherInfo();
// });
// function findWeatherInfo() {
// const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
// request(url, (error, response, body) => {
//   console.log("error:", error); // Print the error if one occurred
//   console.log("statusCode:", response && response.statusCode); //
//   console.log(JSON.parse(body));
// });
// }

// console.log(process.argv);

const address = process.argv[2];

if (address) {
  geocode(address, (error, {latitude, longitude}={}) => {
    if (error) return console.log(error);

    forecast(latitude,longitude, (error, weatherData) => {
      if (error) return console.log(error);
      
      console.log("Weather Data:", weatherData);
    });
  });
} else console.log("Please Provide an address");
