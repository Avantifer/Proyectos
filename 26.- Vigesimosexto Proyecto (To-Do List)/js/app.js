const top_side = document.querySelector('.top-side');
const iconsun = document.querySelector('.icon-sun');

iconsun.addEventListener('click', () => {
    toWhite();
});

function toBlack() {
    const whites = document.querySelectorAll('.white');
    whites.forEach(el => {
        el.classList.remove('white');
        el.classList.add('black');
    });

    function icon(){
        const iconmoon = document.querySelector('.icon-moon');
        iconmoon.remove();

        const iconsun = document.createElement('img');
        iconsun.src = '../img/icon-sun.svg';
        iconsun.classList.add("icon-sun");
        top_side.appendChild(iconsun);

        iconsun.addEventListener('click', () => {
            toWhite();
        })
    }
    icon();

    function changebackground() {
        const image = document.querySelector('.background');
        image.src = '../img/bg-desktop-dark.jpg';
    }
    
    changebackground();


}

function toWhite() {
    const blacks = document.querySelectorAll('.black');
    blacks.forEach(el => {
        el.classList.remove();
        el.classList.add('white');
    });

    function icon() {
        const iconsun = document.querySelector('.icon-sun');
        iconsun.remove();

        const iconmoon = document.createElement('img');
        iconmoon.src = '../img/icon-moon.svg';
        iconmoon.classList.add("icon-moon");
        top_side.appendChild(iconmoon);

        iconmoon.addEventListener('click', () => {
            toBlack();
        })
    }
    icon();

    function changebackground() {
        const image = document.querySelector('.background');
        image.src = '../img/bg-desktop-light.jpg';
    }
    
    changebackground();
}