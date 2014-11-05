/**
 * Created by search-engine on 28/10/14.
 */


/*
 * The pie representing the size attribute
 */

function Pie() {

    var pie = d3.svg.arc()
        .innerRadius(0)
        .outerRadius(40)
        .startAngle(0.2)
        .endAngle(0.5 * Math.PI);

   return pie;
}


/*
 * The inner ring segment for the age attribute
 */
function InnerRing() {

    var innerRing = d3.svg.arc()
        .innerRadius(25)
        .outerRadius(30)
        .startAngle(0)
        .endAngle(2 * Math.PI);

    return innerRing;
}

/*
 * The arc segment representing the age attribute
 */
function Arc() {

    var arc = d3.svg.arc()
        .innerRadius(25)
        .outerRadius(30)
        .startAngle(Math.PI)
        .endAngle(Math.PI + 1.5);

    return arc;
}

/*
 * The dot representing the age attribute
 */
function Dot() {

    var dot = d3.svg.arc()
        .innerRadius(0)
        .outerRadius(5)
        .startAngle(0)
        .endAngle(2 * Math.PI);

    return dot;
}


/*
 * The glyph
 *
 */
function Glyph() {

    var bound = 400;

    var canvas = d3.select("body")
        .append("svg")
        .attr("class", "glyph");

    var svg = canvas.append("g")
        .attr("transform", "translate(" + bound / 2 + ", " + bound / 2 + ")");
    /*
     * The outer ring, boundary of the glyph
     */
    var ring = d3.svg.arc()
        .innerRadius(39)// TODO: Read from CSS
        .outerRadius(40)
        .startAngle(0)
        .endAngle(2 * Math.PI);


    svg.append("path")
        .attr("class", "ring")
        .attr("d", ring);

    svg.append("path")
        .attr("class", "pie")
        .attr("d", Pie());

    svg.append("path")
        .attr("class", "innerRing")
        .attr("d", InnerRing());


    svg.append("path")
        .attr("class", "arc")
        .attr("d", Arc());


    svg.append("path")
        .attr("class", "dot")
        .attr("d", Dot());



    /*
     * Spiral
     */


    var span = 0.5; // [0-1], decides the percentage of the spiral will be displayed.

    var start = 0,
        end = 1,
        r_min = 15,
        r_max = 22;

    var scaling = 1000;
    var pieces = d3.range(start + (1 / scaling), end + (1 / scaling) - span, (end - start) / scaling);

    var color = d3.scale.linear()
        .domain([0, 0.2, 0.4, 0.8, 1.0])
        .range(["black", "orange", "yellow", "cyan", "black"]);

    var colorMap = function(index) {
        return color(index);
    }

    // [0..1] => [r_min .. r_max]
    var radius = d3.scale.linear()
        .domain([start, end])
        .range([r_min, r_max]);

    // [0..1] => [0+ .. 4pi]
    var theta = function(d) {
        var angle = (4 * Math.PI) * d;
        return angle;
    };

    var spiral = d3.svg.line.radial()
        .interpolate("cardinal")
        .angle(function(d) { return theta(d); })
        .radius(function(d) { return radius(d); });

    /*
    // Debug statement
    console.log("pieces: " + pieces.length + " : " + pieces);
    for (var i = 0; i < 100; ++i) {
        console.log("r    : " + radius(pieces[i]));
        console.log("theta: " + theta(pieces[i]));
    }
    console.log("spiral: " + spiral(pieces));
    */


    /*
    svg.append("path").datum(d3.range(50))
        .attr("class", "line")
        .attr("d", spiral(pieces));
    */

    svg.selectAll(".spiral")
        .data(pieces).enter().append("path")
        .attr("d", function(d) { return spiral([d, d + 1 / scaling]); })// TODO: need two points
        .attr("stroke", function(d) { return color(d) })
        .attr("fill", "none")
        .attr("stroke-width", "1.5px");

}