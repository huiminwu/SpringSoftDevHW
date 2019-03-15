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
});
    
