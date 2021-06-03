function getRandomImage(clicked){
    var randomImage = ["Rock","Paper","Scissors"];

var number = Math.floor(Math.random()*randomImage.length);
document.getElementById("Computer").src = "../Images/"+randomImage[number]+".jpg";
}

getRandomImage()

document.getElementById("Rock").onclick = function() {myFunction()};
function myFunction() {
    document.getElementById("Computer").innerHTML = getRandomImage();
  }





  if (clicked == randomImage) {
    document.getElementById("text").innerText = "Uavgjort!"; 
    man = man + 1; 
    comp = comp + 1;  
} 

else if (clicked == "scissor" && randomImage == "paper" || 
clicked == "rock" && randomImage == "scissor" || 
clicked == "paper" && randomImage == "rock"){
    document.getElementById("text").innerText = "Du vant!";
    man = man + 1; 
} 

else if (clicked == "scissor" && randomImage == "rock" || 
clicked == "rock" && randomImage== "paper" || 
clicked == "paper" && randomImage == "scissor") {
    document.getElementById("text").innerText = "Du tapte!";
    comp = comp + 1;  
}


