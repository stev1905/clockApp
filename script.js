var today = new Date();
var hours = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();
var day = today.getDay();
var aMpM = 'AM';
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

var dayOfWeek = days[today.getDay()];
var month = months[today.getMonth()];

if(hours > 12) {
    hours = hours - 12;
    aMpM = 'PM';
}

var currentTime = hours + ":" + minutes + ":" + seconds +' '+aMpM;
var currentDate = dayOfWeek + "-" + month +" "+ day;

document.getElementsByClassName('time')[0].innerText = currentTime;
document.getElementsByClassName('date')[0].innerText = currentDate;