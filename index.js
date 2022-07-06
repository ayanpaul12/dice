var random1=Math.floor(Math.random()*6+1);
source1="images/dice"+random1+".png";
document.querySelectorAll("img")[0].setAttribute("src",source1);
var random2=Math.floor((Math.random()*6+1));
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+random2+".png");
if(random1>random2)
document.querySelector("h2").innerHTML="🚩Player1 wins";
else if(random2==random1)
document.querySelector("h2").innerHTML="Draw📍";
else
document.querySelector("h2").innerHTML="Player2 wins🚩";