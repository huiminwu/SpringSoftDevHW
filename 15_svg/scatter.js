var scale = 25;
var width = 400;
var x = d3.scale.linear().range([0, width]);

d3.csv("data.csv", type, function(error, data) {
    x.domain([0, d3.max(data, (d) => d.value)]);
    var svg = d3.select(".chart")
                .attr("width", width)
                .attr("height", 500)
    svg.selectAll("circle")
        .data(data)
        .enter().append("circle")
        .attr("cx", function(d) {
            return d.x * 10;
        })
        .attr("cy", function(d) {
            return d.y * 10;
        })
        .attr("r", 5)

    svg.append("text")
        .attr("color", "black")
        .attr("x", 0)
        .attr("y", 0)
        .text("hours shlept");
    }
);

function type(d) {
    d.x = +d.x;
    d.y = +d.y;
    return d;
}
