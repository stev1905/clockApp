var today = new Date();
var hours = today.getHours() - 12;
var isToggle = true;

function myTimer() {
    var today = new Date();
    var seconds = today.getSeconds();
    var minutes = today.getMinutes();
    var day = today.getDate();
    var aMpM = 'AM';
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var dayOfWeek = days[today.getDay()];
    var month = months[today.getMonth()];

    var currentTime = hours + ":" + minutes;
    var currentDate = dayOfWeek + " - " + month +" "+ day;

    if(seconds < 10) {
        seconds = '0'+ seconds;
    }

    if(minutes < 10) {
        minutes = '0'+ minutes;
    }
    //DOM manipulation
    document.getElementsByClassName('time')[0].innerText = currentTime;
    document.getElementsByClassName('date')[0].innerText = currentDate;
    document.getElementsByClassName('specTime')[0].children[0].innerText = aMpM;
    document.getElementsByClassName('specTime')[0].children[1].innerText = seconds;
}

function toggle24Format() {
    if(today.getHours() > 12 && isToggle === true) {
        aMpM = 'PM';
        hours = hours + 12;
        isToggle = false;
    }
}

function toggle12Format() {
    if(today.getHours() > 12 && isToggle === false) {
        hours = hours - 12;
        isToggle = true;
    }
}

//automatically update seconds.
setInterval(myTimer, 1000);