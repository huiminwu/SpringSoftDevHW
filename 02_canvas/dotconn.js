//Witchbolt
//Hui Min Wu and Sophia Xia
//SoftDev2 pd8
//K02 -- Connecting the Dots
//2019-02-01

var c = document.getElementById("playground");
var ctx = c.getContext("2d");
ctx.beginPath();
var prevX, prevY = -1;
var cleared = true;

function draw(e) {
    //offsetX returns the x coordinate from the origin of the canvas, not the page
    var x = e.offsetX;

    //offsetY returns the y coordinate from the origin of the canvas, not the page
    var y = e.offsetY;

    drawDot(x,y);
}

var clearRect = function() {
    ctx.clearRect(0,0,600,600);
    cleared = true;
};

function drawDot(x, y) {
    if (!cleared) {
        ctx.strokeStyle = "#000000";
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(x, y);
        ctx.stroke();
    }
    ctx.fillStyle = "#ff0000";
    //beginPath starts the creation of a line
    ctx.beginPath();
    ctx.ellipse(x,y,5,5, 0, 0, 2 * Math.PI);
    prevX = x;
    prevY = y;
    //creates the given path
    ctx.stroke();
    ctx.fill();
    cleared = false;
}
//e.preventDefault(), although not used in the code, is used why trying to catch an event that has happened. If the event doesn't get handled, 
//it prevents the user from performing the action
