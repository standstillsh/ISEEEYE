var mousePosX = 0;
var mousePosY = 0;
var mouseDotC = document.getElementById("mouse-dotC");
var mouseDotA = document.getElementById("mouse-dot-active");
var mouseCircle = document.getElementById("mouse-circle");

document.onmousemove = function(e) {

  //Update mouse positions
  mousePosX = e.pageX;
  mousePosY = e.pageY;

  //Move dot to mouse position
  mouseDotC.style.top = mousePosY + "px";
  mouseDotC.style.left = mousePosX + "px";
}


var delay = 6
var revisedMousePosX = 0;
var revisedMousePosY = 0;

//Create a Delayed mouse follow
function delayMouseFollow() {
  requestAnimationFrame(delayMouseFollow);

  //Calcculate Delay
  revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
  revisedMousePosY += (mousePosY - revisedMousePosY) / delay; 

  mouseCircle.style.top = revisedMousePosY  + "px";
  mouseCircle.style.left = revisedMousePosX  + "px";

}
delayMouseFollow();

var getAllLinks = document.getElementsByTagName("A");
for(var i=0; i < getAllLinks.length; i++) {
  getAllLinks[i].addEventListener("mouseover", function(e){
    mouseDotA.classList.add("linkHover");
  })
  getAllLinks[i].addEventListener("mouseleave", function(e){
    mouseDotA.classList.remove("linkHover");
  })
}

