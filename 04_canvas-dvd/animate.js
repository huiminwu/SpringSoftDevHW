// 
// SoftDev pd8
// K03 -- canvas-based, JS-driven animation basics
// 2019-02-06w
// --------------------------------------------------

//Used model from "Thluffy" Sinclair

//access canvas and buttons via DOM
var c = document.getElementById("playground");
var dotButton = document.getElementById( "circle" );
var dvdButton = document.getElementById("dvd");
var stopButton = document.getElementById( "stop" );
var requestID;

var bounceDvd = function() {
    window.cancelAnimationFrame(requestID);

    var rectWidth = 100;
    var rectHeight = 50;

    var rectX = Math.floor(Math.random() * (c.width - rectWidth));
    var rectY = Math.floor(Math.random() * (c.height - rectHeight));
    var xVel = 1;
    var yVel = 1;
    //yVel = yVel
    //xVel = xVel * -1;
    
    var logo = new Image();
    logo.src = "logo_dvd.jpg";
    var dvdLogo = function() {
        requestID = window.requestAnimationFrame(dvdLogo);
        if(rectX == c.width - rectWidth) {
            xVel = xVel * -1;
        } else if(rectY == c.height - rectHeight) {
            yVel = yVel * -1;
        } else if(rectX == c.width + rectWidth) {
            xVel = xVel * -1;
        } else if(rectY == c.width + rectHeight) {
            yVel = yVel * -1;
        }
        rectX = rectX + (1 * xVel);
        rectY = rectY + (1 * yVel);
        ctx.drawImage(logo, rectX, rectY, rectWidth, rectHeight);
    };
    dvdLogo();
};
//prepare to interact with canvas in 2D
var ctx = c.getContext("2d");

//set fill color to celine
ctx.fillStyle = "#00ffff";


var radius = 0;
var growing = true;


var drawDot = function() {
    window.cancelAnimationFrame( requestID );
    
    ctx.clearRect( 0, 0, c.width, c.height );

    if ( growing ) {
	radius += 1;
    }    
    else {
	radius -= 1;
    }

    if ( radius == (c.width / 2) )
	growing = false;
    else if ( radius == 0 ) {
	growing = true;
    }

    //draw the dot
    ctx.beginPath();
    ctx.arc( c.width / 2, c.height / 2, radius, 0, 2 * Math.PI );
    ctx.stroke();
    ctx.fill();

    requestID = window.requestAnimationFrame( drawDot );
};


var stopIt = function() {
    console.log( requestID );
    window.cancelAnimationFrame( requestID );
};

var clear = function() {
    ctx.clearRect(0,0,500,500);
};

dotButton.addEventListener( "click", function() {
                                        clear();
                                        drawDot();
                                    });
stopButton.addEventListener( "click",  stopIt );
dvdButton.addEventListener( "click", function() {
                                        clear();
                                        bounceDvd();
                                    });
//c.addEventListener( "click", drawDot );
//drawDot();
//dvdLogo();
