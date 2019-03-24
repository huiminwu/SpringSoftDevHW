// Team VIM: Hui Min Wu and Daniel Keriazis
// SoftDev2 pd8
// K15 -- Scattered
// 2019-03-24

var hrs = [3, 8, 7, 3, 2, 1]
var gpas = [4.0, 0.8, 1.5, 1.6, 2.3, 4.2]
var data = [[3, 4.0], [8, 0.8], [7, 1.5], [3, 1.6], [2, 2.3], [1, 4.2]]
var width = 350;
var height = 350;
var x = d3.scaleLinear()
            .domain([d3.min(hrs) - 1, d3.max(hrs) + 3])
            .range([0, width]);
var y = d3.scaleLinear()
            .domain([d3.min(gpas) - 1, d3.max(gpas) + 1])
            .range([height/2, 0]);

var xAxis = d3.axisBottom()
                    .scale(x);

var yAxis = d3.axisLeft()
                    .scale(y);
        
var svg = d3.select(".chart")
            .attr("width", width)
            .attr("height", height)

var circles = svg.selectAll("g")
                .data(data)
                .enter()
                .append("circle")
                .attr("cx", function(d) {
                    return d[0] * 40 + 20;
                })
                .attr("cy", function(d) {
                    return d[1] * 40;
                })
                .attr("r", 5)

svg.append("g")
    .attr("transform", "translate(45,10)")
    .call(yAxis);

svg.append("g")
    .attr("transform", "translate(45,186)")
    .call(xAxis);

svg.append("text")
    .attr("x", "-60")
    .attr("dy", "1em")
    .attr("y", "5")
    .attr("transform", "rotate(-90)")
    .text(" GPAS ");

svg.append("text")
    .attr("x", "200")
    .attr("dy", "1em")
    .attr("y", "220")
    .text("Hours Slept")

d3.selectAll("text").style("fill", "red");

