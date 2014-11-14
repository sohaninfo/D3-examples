
/*
 * Glyph
 * I/P: Selection (group), Type, Size, Date+Time, Axis(?)
 * O/P:
 *
 * Grouping: http://jsfiddle.net/5Td4Q/4/
 */

function Glyph() {

 
    var resultJson =  [
        {
            "weight" : 0.875,
            "name" : "suckable mackerel blueprint chieftain.dxf",
            "type" : "CAD",
            "size" : "1.2 KB",
            "date" : "2012-05-23T00:30:57",
            "owner" : "",
            "group" : "",
            "x" : 439.25252036178586,
            "y" : 193.99906946578878,
            "width" : 8.5545254130913779,
            "height" : 32.669505265977691
        },
        {
            "weight" : 0.875,
            "name" : "unserviced reconditioned dishier draft.sys",
            "type" : "System",
            "size" : "552.6 KB",
            "date" : "2014-10-16T21:57:41",
            "owner" : "",
            "group" : "",
            "x" : 74,
            "y" : 74,
            "width" : 303.57094333304099,
            "height" : 216.90540719364998
        },
        {
            "weight" : 0.875,
            "name" : "monthlies dynamics fogbank draft.rtf",
            "type" : "Document",
            "size" : "77.3 KB",
            "date" : "2010-11-02T05:18:37",
            "owner" : "",
            "group" : "",
            "x" : 433.57094333304099,
            "y" : 231.85816402780321,
            "width" : 68.429056666959013,
            "height" : 270.14183597219676
        },
        {
            "weight" : 0.875,
            "name" : "districts instantly bicycled draft.asp",
            "type" : "Web",
            "size" : "10.6 KB",
            "date" : "2011-03-28T23:39:38",
            "owner" : "",
            "group" : "",
            "x" : 33.999999999999993,
            "y" : 330.90540719364998,
            "width" : 14.094545285803422,
            "height" : 155.09459280635002
        },
        {
            "weight" : 0.875,
            "name" : "volt referrals cricket outline.doc",
            "type" : "Document",
            "size" : "12.4 KB",
            "date" : "2014-07-18T23:36:44",
            "owner" : "",
            "group" : "",
            "x" : 433.57094333304099,
            "y" : 18.000000000000011,
            "width" : 68.429056666959013,
            "height" : 43.161278497610219
        }
    ];
    console.log(resultJson);



    var sizeCanvas  = 1000;
    var sizeDot     = 5; // 5 pixel

    var canvas = d3.select("body")
        .append("svg")
        .attr("width", sizeCanvas)
        .attr("height", sizeCanvas);

    var glyphGroup = canvas.append("g");
        //.attr("transform", "translate(" + bound / 2 + ", " + bound / 2 + ")");

    /*var colorDot = {"Document" : ,
        Spreadsheet
            Presentation
        Audio
            Video
        Image
            Database
        Executable
            Web
        System

            Compressed
        DiskImage
            Developer
        CAD
            Backup
        Misc
    };*/
    var dots = glyphGroup.selectAll("dots")
        .data(resultJson).enter()
        .append("circle")
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; })
        .attr("r", sizeDot)
        .style("fill", "red");

    console.log(dots);

    /*
     * The outer ring, boundary of the glyph
     */
    /*
    var ring = d3.svg.arc()
        .innerRadius(39)// TODO: Read from CSS
        .outerRadius(40)
        .startAngle(0)
        .endAngle(2 * Math.PI);


    glyphGroup.append("path")
        .attr("class", "ring")
        .attr("d", ring);

    glyphGroup.append("path")
        .attr("class", "pie")
        .attr("d", Pie());

    glyphGroup.append("path")
        .attr("class", "innerRing")
        .attr("d", InnerRing());


    glyphGroup.append("path")
        .attr("class", "arc")
        .attr("d", Arc());


    glyphGroup.append("path")
        .attr("class", "dot")
        .attr("d", Dot());

*/
    /*
     * Spiral
     */

    /*
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

     */

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

    /*
    glyphGroup.selectAll(".spiral")
        .data(pieces).enter().append("path")
        .attr("d", function(d) { return spiral([d, d + 1 / scaling]); })// TODO: need two points
        .attr("stroke", function(d) { return color(d) })
        .attr("fill", "none")
        .attr("stroke-width", "1.5px");
    */




}

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

