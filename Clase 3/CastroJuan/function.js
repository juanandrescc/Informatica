boton = document.querySelector ("#btn1");
parraf = document.querySelector ("#parrafo1");
function cambiarcolor(){
   parraf.style.backgroundColor = "red";
}
boton.onclick = cambiarcolor;

boton2 = document.querySelector ("#btn2");
parraf = document.querySelector ("#parrafo1");
function esconder(){
   parraf.style.display = "none";
}
boton2.onclick = esconder;

boton3 = document.querySelector ("#btn3");
parraf = document.querySelector ("#parrafo1");
function aparecer(){
   parraf.style.display = "block";
}
boton3.onclick = aparecer;

document.getElementById("imagen").onmouseover = function() {mouseOver()};
document.getElementById("imagen").onmouseout = function() {mouseOut()};

function mouseOver() {
document.getElementById("imagen").style.padding = "20px";
}

function mouseOut() {
document.getElementById("imagen").style.padding = "0px";
}