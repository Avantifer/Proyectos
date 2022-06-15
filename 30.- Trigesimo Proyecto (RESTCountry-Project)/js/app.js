const countries = document.querySelector('.countries');

window.onload = getAll();

async function getAll(){
    const url = 'https://restcountries.com/v3.1/all';
    const response = await fetch(url);
    const fulldata = await response.json();
    createCountries(fulldata);
}

document.querySelector('.regions').addEventListener('change', async () => {
        countries.innerText = '';
    
        const url = 'https://restcountries.com/v3.1/region/'+document.querySelector('.regions').value;
        const response = await fetch(url);
        const fulldata = await response.json();
        createCountries(fulldata);
}) 

document.querySelector('.input').addEventListener('keyup', async () =>{
    countries.innerText = ''
    if(!document.querySelector('.input').value){
        getAll();
    } else{
        const url = 'https://restcountries.com/v3.1/name/'+ document.querySelector('.input').value;
        const response = await fetch(url);
        const fulldata = await response.json();
        createCountries(fulldata);
    } 
});

function createCountries(array) {
    if(array.length > 0){
        array.forEach(el => {
            const country = document.createElement('div');
            country.classList.add('country');
            countries.appendChild(country);
    
            const flag_container = document.createElement('div');
            flag_container.classList.add('flag-container');
            country.appendChild(flag_container);
    
            const flag = document.createElement('img');
            flag.classList.add('flag');
            flag.src = el.flags.png;
            flag_container.appendChild(flag)
    
            const body = document.createElement('div');
            body.classList.add('body');
            country.appendChild(body);
    
            const title = document.createElement('h3');
            title.classList.add('title');
            title.innerText = el.name.common;
            body.appendChild(title);
    
            const population = document.createElement('p');
            population.innerText = 'Population: ';
            const populationspan = document.createElement('span');
            populationspan.innerText = el.population;
            population.appendChild(populationspan);
            body.append(population);
    
            const region = document.createElement('p');
            region.innerText = 'Region: ';
            const regionspan = document.createElement('span');
            regionspan.innerText = el.region;
            region.appendChild(regionspan);
            body.appendChild(region);
    
            const capital = document.createElement('p');
            capital.innerText = 'Capital: ';
            const capitalspan = document.createElement('span');
            capitalspan.innerText = el.capital;
            capital.appendChild(capitalspan);
            body.appendChild(capital)
        });
    }   
}