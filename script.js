function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "Usted ha oprimido el botón  " + localStorage.clickcount + " vez(ces).";
    } else {
        document.getElementById("result").innerHTML = "Su navegador no soporta web storage";
    }
}

function setStorage(){
  var user= document.getElementById("username").value;
  localStorage.setItem("userName", user);
}

/*function getStorage(){
  document.getElementById("result1").innerHTML = "Este es el valor en el local, usuario: " +   localStorage.getItem("userName");
}*/

$(document).ready(function(){
  $("#consultar").click(function(){
    document.getElementById("result1").innerHTML = "Este es el valor en el local, usuario: " +   localStorage.getItem("userName");
  });
});



