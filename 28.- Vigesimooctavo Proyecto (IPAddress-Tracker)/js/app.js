var requestOptions = {
    method: 'GET',
    redirect: 'follow',
};  

const body = document.body;

document.querySelector('.button').addEventListener('click', () => {
    getGeoLocation();
} )

async function getGeoLocation(){
    const url = "https://geo.ipify.org/api/v1?apiKey=" + apikey1 + "&ipAddress=" + document.querySelector('.input').value;
    const reponse = await fetch(url, requestOptions)
    const fulldata = await reponse.json();
    const location = fulldata.location;
    
    const mid_div = document.createElement('div');
    mid_div.classList.add('mid-side');
    body.appendChild(mid_div);

    const line = document.createElement('div');
    const line2 = document.createElement('div');
    const line3 = document.createElement('div');

    line.classList.add('line');
    line2.classList.add('line');
    line3.classList.add('line');

    const ipaddress_div = document.createElement('div');
    ipaddress_div.classList.add('ipaddress');
    mid_div.appendChild(ipaddress_div)
    const ipaddress_p = document.createElement('p');
    ipaddress_p.innerText = 'Ip Address';
    ipaddress_div.appendChild(ipaddress_p);
    const ipaddress_h2 = document.createElement('h2');
    ipaddress_h2.innerText = fulldata.ip;
    ipaddress_div.appendChild(ipaddress_h2);
    mid_div.appendChild(line);

    const location_div = document.createElement('div');
    location_div.classList.add('location');
    mid_div.appendChild(location_div)
    const location_p = document.createElement('p');
    location_p.innerText = 'Location';
    location_div.appendChild(location_p)
    const location_h2 = document.createElement('h2');
    location_h2.innerText = location.city + " "+ location.postalCode + ", " + location.region + " " + location.country;
    location_div.appendChild(location_h2);
    mid_div.appendChild(line2);

    const timezone_div = document.createElement('div');
    timezone_div.classList.add('timezone');
    mid_div.appendChild(timezone_div)
    const timezone_p = document.createElement('p');
    timezone_p.innerText = 'Timezone';
    timezone_div.appendChild(timezone_p)
    const timezone_h2 = document.createElement('h2');
    timezone_h2.innerText = 'UTC: ' +location.timezone;
    timezone_div.appendChild(timezone_h2);
    mid_div.appendChild(line3);

    const ISP_div = document.createElement('div');
    ISP_div.classList.add('ISP');
    mid_div.appendChild(ISP_div)
    const ISP_p = document.createElement('p');
    ISP_p.innerText = 'ISP';
    ISP_div.appendChild(ISP_p)
    const ISP_h2 = document.createElement('h2');
    ISP_h2.innerText = fulldata.as.name;
    ISP_div.appendChild(ISP_h2);

    getMap(location.lat, location.lng);
}

async function getMap(lat, lon) {
    const map = document.createElement('div');
    map.classList.add('bot-side', 'map');
    body.appendChild(map);

    const url = "https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/static/" + lon + "," + lat + ",14,20/1000x1000?access_token="+ apikey2;
    const iframe = document.createElement('iframe');    
    iframe.src = url;
    iframe.setAttribute('scrolling', 'no')
    map.appendChild(iframe);
}