var number = document.getElementById('number').innerHTML;

function addCounter() {
    number++;
    document.getElementById('number').innerHTML = number;

    (number > 0) ? document.getElementById('number').className = "higher" :
    (number < 0) ? document.getElementById('number').className = "minus" :
    document.getElementById('number').className = "zero";
}

function lowerCounter() {
    number--;
    document.getElementById('number').innerHTML = number;

    (number > 0) ? document.getElementById('number').className = "higher" :
    (number < 0) ? document.getElementById('number').className = "minus" :
    document.getElementById('number').className = "zero";
}


