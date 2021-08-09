function diff(){
    const endYear = new Date("2022-01-01");
    var today = new Date();

    var totalSeconds = (endYear - today) / 1000;

    var days = Math.floor(totalSeconds / 3600 / 24);
    var hours = Math.floor(totalSeconds / 3600) % 24;
    var mins = Math.floor(totalSeconds / 60) % 60;
    var seconds = Math.floor(totalSeconds) % 60;

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('mins').innerHTML = mins;
    document.getElementById('seconds').innerHTML = seconds;

}


var intervalID = window.setInterval(diff, 1000);