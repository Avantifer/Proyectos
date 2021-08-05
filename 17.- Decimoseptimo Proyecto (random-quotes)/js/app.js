const generator = document.getElementById('generator');
const quote = document.getElementById('quote');
const author = document.getElementById('author');

const quotes = [
    "The way I see it, if you want the rainbow, you gotta up with the rain.",
    "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    "Sometimes you will never know the value of amoment, until it becomes a memory.",
    "The successful warrior is the average man, with laser-like focus",
    "Intellectual growth should commence at birth and cease at death."
];

const authors = [
    "Dolly Parton",
    "Mahatma Gandhi",
    "Dr. Seuss",
    "Bruce Lee",
    "Albert Einstein"
];

const arr = [];

generator.onclick = function() {
    var num = Math.floor(Math.random() * (quotes.length - 0)) + 0;

    while (num === arr[arr.length -2] || num === arr[arr.length -1]){
        num = Math.floor(Math.random() * (quotes.length - 0)) + 0;
    }
    arr.push(num);

    quote.innerHTML = "\""+quotes[num]+"\"";
    author.innerHTML = "~"+authors[num];
}