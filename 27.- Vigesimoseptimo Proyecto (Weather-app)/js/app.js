var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

document.querySelector('.submit').addEventListener('click', () =>{
  getLatLong();
})

async function getLatLong() {
  var country = document.querySelector('.input').value;
  country = country.replace(" ", "%20");
  const url = "https://api.opencagedata.com/geocode/v1/json?key=6ad3bd246e19464294801af4b4527937&q="+country;
  const response = await fetch(url, requestOptions)
  var fulldata = await response.json();
  var data = fulldata.results[0].geometry;
  var lat = data.lat;
  var long = data.lng;
}












async function getInformation(){
  const url = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&units=metric&lang=es&exclude=minutely,hourly,alerts&appid=a8a51effc76fe5e818b91eafff3b0269";
  const response = await fetch(url, requestOptions)
  var data = await response.json();

}

getInformation();