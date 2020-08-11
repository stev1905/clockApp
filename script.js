var today = new Date();
var hours = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();
var day = today.getDate();
var aMpM = 'AM';
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var dayOfWeek = days[today.getDay()];
var month = months[today.getMonth()];
var is24HourFormat = true;

function myTimer() {
    if(seconds < 10) {
        seconds = '0'+ seconds;
    }

    if(minutes < 10) {
        minutes = '0'+ minutes;
    }

    var currentTime = hours + ":" + minutes;
    var currentDate = dayOfWeek + " - " + month +" "+ day;

    //DOM manipulation
    document.getElementsByClassName('time')[0].innerText = currentTime;
    document.getElementsByClassName('date')[0].innerText = currentDate;
    document.getElementsByClassName('specTime')[0].children[0].innerText = aMpM;
    document.getElementsByClassName('specTime')[0].children[1].innerText = seconds;
}

function toggle24Format() {
    if(is24HourFormat === false) {
        hours = hours + 12;
        is24HourFormat = true;
    }
}

function toggle12Format() {
    if(hours > 12 && is24HourFormat === true) {
        hours = hours - 12;
        is24HourFormat = false;
    }
}
//Automatically update seconds
setInterval(function() {
    myTimer();
}, 1000);

   