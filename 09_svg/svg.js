var pic = document.getElementById("vimage");
var xPrev;
var yPrev;
var cleared = true;
pic.addEventListener("click", function(e) {
    var xNew = e.offsetX;
    var yNew = e.offsetY;
    var cInit = document.createElementNS(
        "http://www.w3.org/2000/svg", "circle");
    cInit.setAttribute("cx", xNew);
    cInit.setAttribute("cy", yNew);
    cInit.setAttribute("r", "10");
    cInit.setAttribute("fill", "red");
    cInit.setAttribute("stroke", "black");
    if(!cleared) {
        //line
        var l = document.createElementNS(
            "http://www.w3.org/2000/svg", "line");
        l.setAttribute("x1", xPrev);
        l.setAttribute("x2", xNew);
        l.setAttribute("y1", yPrev);
        l.setAttribute("y2", yNew);
        l.setAttribute("style", "stroke:black;stroke-width:2");
        pic.appendChild(l);
       
        //circle
        var c = document.createElementNS(
            "http://www.w3.org/2000/svg", "circle");
        var tX = e.offsetX;
        var tY = e.offsetY;
        c.setAttribute("cx", xPrev);
        c.setAttribute("cy", yPrev);
        c.setAttribute("r", "10");
        c.setAttribute("fill", "red");
        c.setAttribute("stroke", "black");
        pic.appendChild(c);
    }
    pic.appendChild(cInit);
    xPrev = tX;
    yPrev = tY;
});

var clr = document.getElementById("clear");
clr.addEventListener("click", function(e) {
    pic.innerHTML = "";
    cleared = true;
});
