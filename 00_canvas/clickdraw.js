//Hui Min Wu
//SoftDev2 pd8
//K00 -- I See a Red Door...
//2019-01-30
var c = document.getElementById("slate");
c.addEventListener("click", draw);
var ctx = c.getContext("2d");
rect = true;

function draw(e) {
    var x = e.clientX;
    var y = e.clientY;
    var button = document.getElementById("toggle");
    if(rect) {
        button.innerHTML = "Draw-A-Dot";
        ctx.fillStyle = "#ff0000";
        ctx.fillRect(x,y,100,100);
    } else {
        button.innerHTML = "Draw-A-Rect";
 
        ctx.fillStyle = "#00ff00";
        ctx.beginPath();
        ctx.ellipse(x,y,50,70, 0, 0, 2 * Math.PI);
        ctx.fill();
   }
}

function toggle(e) {
    rect = !rect;
}

var clearRect = function(e) {
    ctx.clearRect(0,0,600,600);
}

var clr = document.getElementById("clear");
clr.addEventListener("click", clearRect);

var drw = document.getElementById("toggle");
drw.addEventListener("click", toggle);

