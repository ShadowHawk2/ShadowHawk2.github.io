var header = document.getElementById("header");

var date = new Date();
var hours = date.getHours();

if(hours >= 5 && hours < 12){
    header.innerText = "God Morgon, FBI";
}

if(hours >= 12 && hours < 16){
    header.innerText = "God dag, FBI";
}

if(hours >= 16 && hours < 19){
    header.innerText = "God Ettermiddag, FBI";
}

if(hours >= 19 && hours < 23.59){
    header.innerText = "God Kveld, FBI";
}

/*
Morning 5-12
Dag 13-16
Ettermiddag 17-19
Kveld 20-23:59
*/


function button_clicked() {
    var welcome = document.getElementById("welcome")
    welcome.style.display = "none";
    welcome.innerText("I")
}