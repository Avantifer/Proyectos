const body = document.body;

document.querySelector('.buttonurl').addEventListener('click', () => {
    getNewUrl();
})

async function getNewUrl(){
    const link = document.querySelector('.input').value;
    const url = 'https://api.shrtco.de/v2/shorten?url=' + link;
    const response = await fetch(url);
    const fulldata = await response.json();
    const newlink = fulldata.result.full_short_link;

    const linksresults = document.querySelector('.linksresults');
    const linkresult = document.createElement('div');
    linkresult.classList.add('linkresult');
    linksresults.appendChild(linkresult);

    const linkconverter = document.createElement('p');
    linkconverter.innerText = link;
    linkresult.appendChild(linkconverter);

    const right = document.createElement('div');
    right.classList.add('right');
    linkresult.appendChild(right);

    const newlinkconverter = document.createElement('p');
    newlinkconverter.innerText = newlink;
    right.appendChild(newlinkconverter);

    const button = document.createElement('button');
    button.classList.add('button', 'copybutton');
    button.innerText = 'Copy';
    right.appendChild(button);

    button.addEventListener('click', () => {
        navigator.clipboard.writeText(button.previousSibling.innerText)
        .then(function() {
            console.log('Copiado');
        }, function(err) {
            console.log('No se ha podido copiar');
        })

        button.classList.add('clicked');
    })
}