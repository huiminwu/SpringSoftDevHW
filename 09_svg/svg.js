var pic =document.getElementById("vimage");
var xPrev;
var yPrev;
var cleared = true;
pic.addEventListener("click", function(e){
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    var xNew = e.offsetX;
    var yNew = e.offsetY;
    c.setAttribute("cx",xNew);
    c.setAttribute("cy",yNew);
    c.setAttribute("r","10");
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");
    if (!cleared) {
        var line = document.createElementNS("http://www.w3.org/2000/svg","line");
        line.setAttribute("x1",xPrev);
        line.setAttribute("x2",xNew);
        line.setAttribute("y1",yPrev);
        line.setAttribute("y2",yNew);
        line.setAttribute("style","stroke:black;stroke-width:2");
        pic.appendChild(line);
        var ci = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        var xNew = e.offsetX;
        var yNew = e.offsetY;
        ci.setAttribute("cx",xPrev);
        ci.setAttribute("cy",yPrev);
        ci.setAttribute("r","10");
        ci.setAttribute("fill", "red");
        ci.setAttribute("stroke", "black");
        pic.appendChild(ci)
    }
    pic.appendChild(c);
    cleared = false;
    xPrev=xNew;
    yPrev=yNew;
});

var clear = document.getElementById("clear");
clear.addEventListener("click", function(e) {
    pic.innerHTML = "";
    cleared = true;
});
    
