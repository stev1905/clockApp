let isMilitaryTime = true;
let hours;
let intervalID;

document.addEventListener('DOMContentLoaded', function() {
    myTimer();
    setInterval(myTimer, 1000);
    console.log(setInterval(myTimer, 1000))
    let backGround = document.querySelector("body")
    backGround.style.backgroundImage = 'url(./images/background.png)'
});

let button = document.getElementById('button');
button.addEventListener('click', (e) => {
    isMilitaryTime = !isMilitaryTime;
    changeTimeFormat();

    clearInterval(intervalID);
    myTimer();
    intervalID = setInterval(myTimer, 1000);
})

const myTimer = () => {
    const today = new Date();
    const seconds = formatTime(today.getSeconds());
    const minutes = formatTime(today.getMinutes());
    hours = formatTime(today.getHours());
    changeTimeFormat();
    const day = today.getDate();
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const dayOfWeek = days[today.getDay()];
    const month = months[today.getMonth()];

    let currentTime = hours + ":" + minutes;
    let currentDate = dayOfWeek + " - " + month +" "+ day;

    //DOM manipulation
    document.getElementsByClassName('time')[0].innerText = currentTime;
    document.getElementsByClassName('date')[0].innerText = currentDate;
    document.getElementsByClassName('specTime')[0].children[1].innerText = seconds;
}

const getAmPM = (hours) => {
    let aMpM = isMilitaryTime ? "" : hours < 12 ? 'AM' : 'PM';
    document.getElementsByClassName('specTime')[0].children[0].innerText = aMpM;
}

const formatTime = (time) => {
    return time < 10 ? "0" + time : time; 
}
const changeTimeFormat = () => {
    if(isMilitaryTime) {
        getAmPM()
        button.innerText = 'Change to 12hr Format';
    } else if(!isMilitaryTime) {
        if(hours > 12) {
            hours -= 12;
            getAmPM()
            button.innerText = 'Change to 24hr Format';
        }
    }
}

