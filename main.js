window.addEventListener("load", function(){
  window.alert("Hello Viewer.Welcome to my website!");
});

function mOver(obj) {
obj.innerHTML = "Thank You For Reading! :)"
}
function mOut(obj) {
obj.innerHTML = "Mouse Over Me"
}

var eeveGifElement = document.getElementById("movement");
var newGif = "https://giphy.com/embed/t4ly6tL5BaoRG";
var oldGif ="https://giphy.com/embed/9dAsDBQcv2mUU";

 eeveGifElement.addEventListener("mouseover", mouseOver);
function mouseOver() {
  eeveGifElement.setAttribute("src", newGif);
}

eeveGifElement.addEventListener("mouseout", mouseout);
function mouseout() {
 eeveGifElement.setAttribute("src", oldGif);
}


var pikachuGifElement = document.getElementById("pokemon")
var newPika = "https://giphy.com/embed/xuXzcHMkuwvf2"
var pikaGif ="https://giphy.com/embed/slVWEctHZKvWU";

pikachuGifElement.addEventListener("onmouseover", mouseOver);
function mouseOver() {
pikachuGifElement.setAttribute("src", newPika);
}

pikachuGifElement.addEventListener("onmouseout", mouseout);
function mouseout() {
pikachuGifElement.setAttribute("src", pikaGif);
}
