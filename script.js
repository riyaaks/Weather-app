const options = {
  method: "GET",
  headers: {
    'X-RapidAPI-Key': '2a2adc3fdcmshe3e3fb1721ee1fep1aea3fjsn4e2a124c8a7e',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  },
};
 // Object For fetching data while giving input inside search box 
const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

    //   cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

// Object For fetching data of below given city
const getWeatherP = () => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Patna",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

    //   cloud_pct.innerHTML = response.cloud_pct;
      ptemp.innerHTML = response.temp;
      pfeels_like.innerHTML = response.feels_like;
      phumidity.innerHTML = response.humidity;
      pmin_temp.innerHTML = response.min_temp;
      pmax_temp.innerHTML = response.max_temp;
      pwind_speed.innerHTML = response.wind_speed;
      pwind_degrees.innerHTML = response.wind_degrees;
      psunrise.innerHTML = response.sunrise;
      psunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

// Object For fetching data of below given city
const getWeatherR = () => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Ranchi",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

    //   cloud_pct.innerHTML = response.cloud_pct;
      rtemp.innerHTML = response.temp;
      rfeels_like.innerHTML = response.feels_like;
      rhumidity.innerHTML = response.humidity;
      rmin_temp.innerHTML = response.min_temp;
      rmax_temp.innerHTML = response.max_temp;
      rwind_speed.innerHTML = response.wind_speed;
      rwind_degrees.innerHTML = response.wind_degrees;
      rsunrise.innerHTML = response.sunrise;
      rsunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

// Object For fetching data of below given city
const getWeatherL = () => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

    //   cloud_pct.innerHTML = response.cloud_pct;
      ltemp.innerHTML = response.temp;
      lfeels_like.innerHTML = response.feels_like;
      lhumidity.innerHTML = response.humidity;
      lmin_temp.innerHTML = response.min_temp;
      lmax_temp.innerHTML = response.max_temp;
      lwind_speed.innerHTML = response.wind_speed;
      lwind_degrees.innerHTML = response.wind_degrees;
      lsunrise.innerHTML = response.sunrise;
      lsunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

// Object For fetching data of below given city
const getWeatherK = () => {

  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

    //   cloud_pct.innerHTML = response.cloud_pct;
      ktemp.innerHTML = response.temp;
      kfeels_like.innerHTML = response.feels_like;
      khumidity.innerHTML = response.humidity;
      kmin_temp.innerHTML = response.min_temp;
      kmax_temp.innerHTML = response.max_temp;
      kwind_speed.innerHTML = response.wind_speed;
      kwind_degrees.innerHTML = response.wind_degrees;
      ksunrise.innerHTML = response.sunrise;
      ksunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

// Object For fetching data of HomeTown Temp of Daltonganj

const getWeatherDal = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Daltonganj",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);


      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      
    })
    .catch((err) => console.error(err));
};

// Object For fetching data of HomeTown Temp of Garhwa

const getWeatherGar = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Garhwa",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);


      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      
    })
    .catch((err) => console.error(err));
};

// / Object For fetching data of HomeTown Temp of Gangi
const getWeatherGangi = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Gangi",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);


      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      
    })
    .catch((err) => console.error(err));
};

// Add Event Listener to send data and call request on API while fetching city value passed on search box
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});


// Add Event Listener to send data and call request on
//  API while fetching city value on hitting GetHomeTown Call
dhome.addEventListener("click", (e) => {
  e.preventDefault();
  getWeatherDal("DaltonGanj");
});

// Add Event Listener to send data and call request on
//  API while fetching city value on hitting GetHomeTown Call
ghome.addEventListener("click", (e) => {
  e.preventDefault();
  getWeatherGar("Garhwa");
});

// Add Event Listener to send data and call request on
//  API while fetching city value on hitting GetHomeTown Call
gangihome.addEventListener("click", (e) => {
  e.preventDefault();
  getWeatherGangi("Gangi");
});


// Calling Function 
getWeather("Delhi")
getWeatherP();
getWeatherR();
getWeatherL();
getWeatherK();
