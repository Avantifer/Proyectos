var requestOptions = {
  method: "GET",
  redirect: "follow",
};

var latitude, longitude, countryname;
var main = document.querySelector(".main");
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

document.querySelector(".submit").addEventListener("click", () => {
  getLatLong();
});

document.querySelector(".changeTheme").addEventListener("click", () => {
  let light = document.querySelectorAll(".bg-light");
  let dark = document.querySelectorAll(".bg-dark");
  changeTheme(light, dark);
});

function changeTheme(lightElements, darkElements) {
  if (lightElements.length >= 1) {
    setDark(lightElements);
    return;
  }

  if (darkElements.length >= 1) {
    setLight(darkElements);
    return;
  }
}

function setDark(lightElements) {
  lightElements.forEach((element) => {
    element.classList.add("bg-dark");
    element.classList.remove("bg-light");
  });

  let lightGray = document.querySelectorAll(".bg-light-dark");
  lightGray.forEach((grayElement) => {
    grayElement.classList.remove("bg-light-dark");
    grayElement.classList.add("bg-dark-light");
  });

  let labelContainer = document.querySelector(".form-switch");
  let icon = document.querySelector(".icon-theme");
  icon.remove();

  let newIcon = document.createElement("img");
  newIcon.src = "../img/icon-moon.svg";
  newIcon.classList.add("icon-theme");
  labelContainer.appendChild(newIcon);
}

function setLight(darkElement) {
  darkElement.forEach((element) => {
    element.classList.add("bg-light");
    element.classList.remove("bg-dark");
  });

  let darkGray = document.querySelectorAll(".bg-dark-light");
  darkGray.forEach((grayElement) => {
    grayElement.classList.remove("bg-dark-light");
    grayElement.classList.add("bg-light-dark");
  });

  let labelContainer = document.querySelector(".form-switch");
  let icon = document.querySelector(".icon-theme");
  icon.remove();

  let newIcon = document.createElement("img");
  newIcon.src = "../img/icon-sun.svg";
  newIcon.classList.add("icon-theme");
  labelContainer.appendChild(newIcon);
}

async function getLatLong() {
  var country = document.querySelector(".input").value;
  country = country.replace(" ", "%20");
  const url = "https://api.opencagedata.com/geocode/v1/json?key=84b92846fdf04ebd9b58980f60fe8871&q=+" + country;
  const response = await fetch(url, requestOptions);
  var fulldata = await response.json();
  var data = fulldata.results[0];
  var name = data.formatted;
  var lat = data.geometry.lat;
  var long = data.geometry.lng;
  countryname = name;
  latitude = lat;
  longitude = long;

  getInformation();
}

async function getInformation() {
  const url =
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    latitude +
    "&lon=" +
    longitude +
    "&units=metric&exclude=minutely,hourly,alerts&appid=a8a51effc76fe5e818b91eafff3b0269";
  const response = await fetch(url, requestOptions);
  var data = await response.json();
  console.log(data);

  main.textContent = "";
  var title = document.createElement("h1");
  title.classList.add("title");
  title.innerText = "5-Day Forecast for " + countryname;
  main.appendChild(title);

  var card_container = document.createElement("div");
  card_container.classList.add("card-container");
  main.appendChild(card_container);

  var today = new Date();

  var images = [];
  var weather = [];
  var hightemperatures = [];
  var mintemperatures = [];
  var humidities = [];
  var winds = [];

  for (let i = 0; i < 5; i++) {
    images.push(data.daily[i].weather[0].id);
    weather.push(data.daily[i].weather[0].description);
    hightemperatures.push(data.daily[i].temp.max.toFixed(0));
    mintemperatures.push(data.daily[i].temp.min.toFixed(0));
    humidities.push(data.daily[i].humidity);
    winds.push(data.daily[i].wind_speed.toFixed(0));
  }

  for (let i = 0; i < 5; i++) {
    var card = document.createElement("div");
    card.classList.add("card", "card-" + i);

    if (images[i] >= 200 && images[i] < 300) {
      card.classList.add("stormy");
    } else if (images[i] >= 300 && images[i] < 400) {
      card.classList.add("drizzling");
    } else if (images[i] >= 500 && images[i] < 600) {
      card.classList.add("raining");
    } else if (images[i] >= 600 && images[i] < 700) {
      card.classList.add("snowy");
    } else if (images[i] >= 700 && images[i] < 800) {
      card.classList.add("hazy");
    } else if (images[i] === 800) {
      card.classList.add("clear");
    } else if (images[i] > 800) {
      card.classList.add("cloudy");
    }

    card_container.appendChild(card);

    var titleday = document.createElement("h2");
    titleday.classList.add("day");
    card.appendChild(titleday);

    var monthday = document.createElement("h4");
    monthday.classList.add("month-day");
    card.appendChild(monthday);

    if (i === 0) {
      titleday.innerText = "Today";
      monthday.innerText = months[today.getMonth()] + " " + today.getDate();
    } else {
      titleday.innerText = days[today.getDay() + i];
      var date = new Date(today);
      date.setDate(date.getDate() + i);
      monthday.innerText = months[date.getMonth()] + " " + date.getDate();
    }

    var imageweather = document.createElement("i");
    imageweather.classList.add("imageweather", "wi", "wi-owm-" + images[i]);
    card.appendChild(imageweather);

    var weathertext = document.createElement("p");
    weathertext.classList.add("weather");
    weathertext.innerText = weather[i];
    card.appendChild(weathertext);

    var temperatures = document.createElement("div");
    temperatures.classList.add("temperatures");
    card.appendChild(temperatures);

    var hightemperature = document.createElement("div");
    hightemperature.classList.add("high-temperature");
    temperatures.appendChild(hightemperature);

    var numberhightemp = document.createElement("h2");
    numberhightemp.classList.add("number-temperature", "number-high");
    numberhightemp.innerText = hightemperatures[i] + "º";
    hightemperature.appendChild(numberhightemp);

    var statehightemp = document.createElement("p");
    statehightemp.classList.add("state-temperature", "state-high");
    statehightemp.innerText = "High";
    hightemperature.appendChild(statehightemp);

    var line = document.createElement("div");
    line.classList.add("line");
    temperatures.appendChild(line);

    var lowtemperature = document.createElement("div");
    lowtemperature.classList.add("low-temperature");
    temperatures.appendChild(lowtemperature);

    var numberlowtemp = document.createElement("h2");
    numberlowtemp.classList.add("number-temperature", "number-low");
    numberlowtemp.innerText = mintemperatures[i] + "º";
    lowtemperature.appendChild(numberlowtemp);

    var statelowtemp = document.createElement("p");
    statelowtemp.classList.add("state-temperature", "state-low");
    statelowtemp.innerText = "Low";
    lowtemperature.appendChild(statelowtemp);

    var humidity = document.createElement("p");
    humidity.classList.add("humidity");
    humidity.innerText = "Humidity: " + humidities[i] + "%";
    card.appendChild(humidity);

    var wind = document.createElement("p");
    wind.classList.add("wind");
    wind.innerText = "Wind Speed: " + winds[i] + "kph";
    card.appendChild(wind);
  }
}
