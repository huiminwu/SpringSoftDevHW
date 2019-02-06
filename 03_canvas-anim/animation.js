var requestID;
var radius = 0;
var moving = false;
var growing = false; 
var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var drawDot = function() {
    clearRect();
    if (!moving) {
        requestID = window.requestAnimationFrame(drawDot);
        console.log(requestID);
        //draw the dot
        //moving = true;
        if (radius < 250 && growing){
            radius++;
        } else {
            growing = false;
            if (radius < 1) {
                growing = true;
            } else {
                radius--;
            }
        }
        //console.log(radius);
        ctx.fillStyle = "#00f";
        ctx.beginPath();
        ctx.arc(c.width/2, c.height/2,
                radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
    }
};
var stopIt = function() {
    cancelAnimationFrame(requestID);
};

var clearRect = function() {
    ctx.clearRect(0,0,500,500);
}

var dotButton = document.getElementById("circle");
dotButton.addEventListener("click", function() {
                                        stopIt();
                                        drawDot();
                            });
var stopButton = document.getElementById("stop");
stopButton.addEventListener("click", stopIt);
