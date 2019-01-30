var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var clearRect = function(e) {
    ctx.clearRect(0,0,600,600);
}

var clr = document.getElementsById("clear");
clr.addEventListener("click", clearRect);

