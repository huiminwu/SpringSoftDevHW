var data = [[3, 4],
            [3, 3.2],
            [5, 2.6],
            [8, 1]]
var svg = d3.select(".chart")
            .attr("width", 120)
            .attr("height", 50)
            .selectAll("circle")
            .data(data).enter()
            .append("circle")
            .attr("cx", function(d) {
                return d[0] * 10;
            })
            .attr("cy", function(d) {
                return d[1] * 10;
            })
            .attr("r", 5);
