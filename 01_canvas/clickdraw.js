//Witchbolt
//Hui Min Wu and Sophia Xia
//SoftDev2 pd8
//K01 -- And I Want to Paint it Better
//2019-01-31
var c = document.getElementById("slate");
var ctx = c.getContext("2d");
rect = true;

function draw(e, bool) {
    //offsetX returns the x coordinate from the origin of the canvas, not the page
    var x = e.offsetX;

    //offsetY returns the y coordinate from the origin of the canvas, not the page
    var y = e.offsetY;

    if(rect) {
        ctx.fillStyle = "#ff0000";
        ctx.fillRect(x,y,100,100);
    } else {
 
        ctx.strokeStyle = "#00ff00";
        
        //beginPath starts the creation of a line
        ctx.beginPath();
        ctx.ellipse(x,y,50,70, 0, 0, 2 * Math.PI);

        //creates the given path
        ctx.stroke();
   }
}

function toggle() {
    rect = !rect;
}

var clearRect = function() {
    ctx.clearRect(0,0,600,600);
};

//e.preventDefault(), although not used in the code, is used why trying to catch an event that has happened. If the event doesn't get handled, 
//it prevents the user from performing the action
