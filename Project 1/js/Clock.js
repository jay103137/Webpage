/* 
 Jacky Wu
 */

setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

const hourHand2 = document.querySelector('[data-hour-hand2]');
const minuteHand2 = document.querySelector('[data-minute-hand2]');
const secondHand2 = document.querySelector('[data-second-hand2]');


function setClock() {
    const currentDate = new Date();
    const second = currentDate.getSeconds() / 60;
    const minute = (second + currentDate.getMinutes()) / 60;
    const hours = (minute + currentDate.getHours()) / 12;
    setRotation(secondHand, second);
    setRotation(minuteHand, minute);
    setRotation(hourHand, hours);

    setRotation(secondHand2, second);
    setRotation(minuteHand2, minute);
    setRotation(hourHand2, hours);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();

function realtimeClock(){
    var rtClock = new Date();
    
    var hr = rtClock.getHours();
    var mn = rtClock.getMinutes();
    var sc = rtClock.getSeconds();
    
    //AM PM 
    var amPm = ( hr < 12 )?"AM":"PM";
    
    //Convert hr to 12 hour format
    hr = ( hr > 12 )? hr - 12 : hr;
    
    //pad the hr,mn,sc with leading 0
    hr = ("0" + hr).slice(-2);
    mn = ("0" + mn).slice(-2);
    sc = ("0" + sc).slice(-2);
    
    //display clock
    document.getElementById('Digital').innerHTML = hr + " : " + mn + " : " + sc + " " +amPm;
    var t = setTimeout(realtimeClock);
}