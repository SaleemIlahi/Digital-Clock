
var hours = document.querySelector("#hours-hand");
var minutes = document.querySelector("#minutes-hand");
var seconds = document.querySelector("#seconds-hand");

setInterval(setClock,1000);
function setClock(){
    var date = new Date();
    var hoursRotation = date.getHours()/12;
    var minutesRotation = date.getMinutes()/60;
    var secondsRotation = date.getSeconds()/60;
    
    setRotation(hours,hoursRotation);
    setRotation(minutes,minutesRotation);
    setRotation(seconds,secondsRotation);

    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var digitalClock = h + " : " + m + " : " + s;
    document.getElementById("time").innerHTML = digitalClock;
}
function setRotation(element,rotation){
    element.style.setProperty('--rotation', (rotation*360));
}
setClock();
