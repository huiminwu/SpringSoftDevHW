var requestID;
var xvel = 1;
var yvel = 1;
var pic =document.getElementById("vimage");
pic.addEventListener("click", function(e){
    // this check prevents the first click from creating another circle
    if (e.target.getAttribute("id") == "vimage") {
        // clicking on a blank section of the svg area should create at that position
        var xNew = e.offsetX;
        var yNew = e.offsetY;
        create(xNew, yNew);
    }
});

var create = function(x, y) {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx",x);
    c.setAttribute("cy",y);
    c.setAttribute("r","10");
    c.setAttribute("fill", "red");
    c.setAttribute("xvel", xvel);
    c.setAttribute("yvel", yvel);
    pic.appendChild(c);
    c.addEventListener("click", color);
    pic.appendChild(c);
};
        

var color = function(e) {
    // clicking on a circle once should change its color
    if(this.getAttribute("fill") == "red") {
        this.setAttribute("fill", "blue");
    } else {
        this.setAttribute("fill", "red");
        this.setAttribute("cx", Math.random() * 500);
        this.setAttribute("cy", Math.random() * 500);
    }
};

var clear = document.getElementById("clear");
clear.addEventListener("click", function(e) {
    var child = pic.firstChild;
    // while there is still something in the cvg
    while(child) {
        pic.removeChild(child);
        child = pic.firstChild;
    }
    moving = false;
    window.cancelAnimationFrame(requestID);
});

var travel = function() {
    window.cancelAnimationFrame(requestID);
    // iterates all children
    for(i = 0; i < pic.children.length; i++) {
        child = pic.children[i];
        var xCoor = parseInt(child.getAttribute('cx'));
        var yCoor = parseInt(child.getAttribute('cy'));
        var rad = parseInt(child.getAttribute('r'));
        var xVel = parseInt(child.getAttribute('xvel'));
        var yVel = parseInt(child.getAttribute('yvel'));
    
        //addresses all sides of the canvas +  changes direction accordingly
        if(xCoor == 500 - 2*rad) {
            xVel = xVel * -1;
        } else if(yCoor == 500 - 2*rad) {
            yVel = yVel * -1;
        } else if(xCoor == 0) {
            xVel = xVel * -1;
        } else if(yCoor == 0) {
            yVel = yVel * -1;
        }
        //either subtracts or adds from the x and y coors
        xCoor = xCoor + (1 * xVel);
        yCoor = yCoor + (1 * yVel);
        //draw the image from generated point
        child.setAttribute('cx', xCoor);
        child.setAttribute('cy', yCoor);
        child.setAttribute('xvel', xVel);
        child.setAttribute('yvel', yVel);
    }
    requestID = window.requestAnimationFrame(travel);
};

var doublevel = function() {
    for(i = 0; i < pic.children.length; i++) {
        child = pic.children[i];
        var xVel = parseInt(child.getAttribute('xvel'));
        var yVel = parseInt(child.getAttribute('yvel'));
        child.setAttribute('xvel', xVel * 2);
        child.setAttribute('yvel', yVel * 2);
    }
}

var moving;
var move = document.getElementById("move");
move.addEventListener("click", function(e) {
    if (!moving) {
        console.log("moving");
        travel(); 
    }
    moving = true;
});

var special = document.getElementById("lucky");
special.addEventListener("click", function(e) {
    doublevel();
});
