var header = document.getElementById("header");

var date = new date();
var hours = date.getHours();

if(hours >= 5 && hours < 12){
    header.innerText = "God Morgon";
}

if(hours >= 13 && hours < 16){
    header.innerText = "God dag";
}

if(hours >= 17 && hours < 19){
    header.innerText = "God Ettermiddag";
}

if(hours >= 20 && hours < 23.59){
    header.innerText = "God Kveld";
}

/*
Morning 5-12
Dag 13-16
Ettermiddag 17-19
Kveld 20-23:59
*/