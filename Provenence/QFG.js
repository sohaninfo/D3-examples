
// (1) field 1 is set (new) and fields 2 - 12 are not set,
// (2) field 1 is set (old) and fields 3 and 4 are set (new),
// (3) Fields 1 and 4 are modified, and
// (4) Field 2 is set (new), and field 3 is unset.

var jsondata = [
    {
        "name" : "apple",
        "type" : {},
        "size" : {},
        "date" : {}
    },
    {
        "name" : "apple",
        "type" : [],
        "size" : {"from": "2MB", "to": "2GB"},
        "date" : {"from": "2014-01-01", "to": "2014-01-01"}

    },
    {
        "name" : "apple computer",
        "type" : [],
        "size" : {"from": "2MB", "to": "2GB"},
        "date" : {"from": "2014-11-01", "to": "2014-01-01"}
    },
    {
        "name" : "apple computer",
        "type" : ["docx", "pdf"],
        "size" : {},
        "date" : {"from": "2014-11-01", "to": "2014-01-01"}
    },
   ];


var iconSize = 8;
var bound = 1000;

var canvas = d3.select("body")
    .append("svg")
    .attr("height", bound)
    .attr("width", bound);

var svgGroup = canvas.append("g")
    .attr("transform", "translate(" + 100 + ", " + 100 + ")");


// TODO: var fields = {key: 0, type: 0, size: 0, date: 0};

var fields = [1, 1, 1, 1];
queryGlyph(fields, svgGroup);

// key
var svgGroup_key = canvas.append("g")
    .attr("transform", "translate(" + 200 + ", " + 100 + ")");

keyIcon(svgGroup_key);

// type
var svgGroup_type = canvas.append("g")
    .attr("transform", "translate(" + 300 + ", " + 100 + ")");

typeIcon(svgGroup_type);

// size
var svgGroup_size = canvas.append("g")
    .attr("transform", "translate(" + 400 + ", " + 100 + ")");

sizeIcon(svgGroup_size);


var svgGroup_size_1 = canvas.append("g")
    .attr("transform", "translate(" + 400 + ", " + 150 + ")");

sizeIcon_2(svgGroup_size_1);

// date

var svgGroup_date = canvas.append("g")
    .attr("transform", "translate(" + 500 + ", " + 100 + ")");

dateIcon(svgGroup_date);



/********************************************************************************************************
 * arg: [key, type, size, date]
 * value: unset = 0 ,	set = 1, changed = 2
 ********************************************************************************************************/

function queryGlyph(fields, svg) {

    var size = 40;

    var key_pie = d3.svg.arc()
        .innerRadius(0)
        .outerRadius(size)
        .startAngle(0)
        .endAngle(0.5 * Math.PI);

    var type_pie = d3.svg.arc()
        .innerRadius(0)
        .outerRadius(size)
        .startAngle(0.5 * Math.PI)
        .endAngle(1.0 * Math.PI);

    var size_pie = d3.svg.arc()
        .innerRadius(0)
        .outerRadius(size)
        .startAngle(1.0 * Math.PI)
        .endAngle(1.5 * Math.PI);

    var date_pie = d3.svg.arc()
        .innerRadius(0)
        .outerRadius(size)
        .startAngle(1.5 * Math.PI)
        .endAngle(2.0 * Math.PI);


    svg.append("path")
        .attr("class", "wedge")
        .style("fill", wedgeColor("key", fields[0])) // Kiwi
        .attr("d", key_pie);


    svg.append("path")
        .attr("class", "wedge")
        .style("fill", wedgeColor("type", fields[1])) // Turquoise
        .attr("d", type_pie);

    svg.append("path")
        .attr("class", "wedge")
        .style("fill", wedgeColor("size", fields[2])) // Scarlet
        .attr("d", size_pie);

    svg.append("path")
        .attr("class", "wedge")
        .style("fill", wedgeColor("date", fields[3])) // Daisy
        .attr("d", date_pie);


}

/********************************************************************************************************
 * field name: key, type, size, date
 * value: unset = 0 ,	set = 1, changed = 2
 ********************************************************************************************************/

function wedgeColor(field, value) {

    if (value == 0) {
        return "#B2BEB5"; // Grey
    }

    if (field == "key") {
        return "#9DAE5C"; // Kiwi

    } else if(field == "type") {
        return "#48D1CC"; // Turquoise

    } else if(field == "size") {
        return "#E25822"; // Scarlet

    } else if(field == "date") {
        return "#F7DC31"; // Daisy

    } else {
        return "#B2BEB5"; // Grey for unknown
    }
}




function keyIcon(svg) {

    var size = 10;
    var dot_1 = d3.svg.arc()
        .innerRadius(0)
        .outerRadius(size)
        .startAngle(0)
        .endAngle(2 * Math.PI);

    svg.append("path")
        .style("fill", "black")
        .attr("d", dot_1);

    var keyicon = svg.append('text')
        //.attr("text-align", "center")
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'central')
        .attr('font-family', 'FontAwesome')
        .attr('font-size', '12px')
        .attr("font-weight", "bolder")
        .style("fill", "red")
        //.attr("stroke", "15px")
        .text(function(d) { return '\uf084'; });

}


function typeIcon(svg) {

    svg.append('text')
        .attr('text-anchor', 'middle')
        //.attr('dominant-baseline', 'central')
        .attr('font-family', 'FontAwesome')
        .attr('font-size', '20px')
        .attr("fill", "black")
        .text(function(d) { return '\uf174'; });
}

function sizeIcon(svg) {

    var size = 10;
    var dot_1 = d3.svg.arc()
        .innerRadius(0)
        .outerRadius(size)
        .startAngle(0)
        .endAngle(2 * Math.PI);

    var dot_2 = d3.svg.arc()
        .innerRadius(0)
        .outerRadius(size / 3)
        .startAngle(0)
        .endAngle(2 * Math.PI);

    svg.append("path")
        .attr("class", "sizeIcon")
        .style("fill", "none")
        .attr("d", dot_1);

    svg.append("path")
        .attr("class", "sizeIcon")
        .style("fill-opacity", "1")
        .attr("d", dot_2);


    /*svg.append('text')
     .attr('text-anchor', 'middle')
     .attr('dominant-baseline', 'central')
     .attr('font-family', 'FontAwesome')
     .attr('font-size', '15px')
     .text(function(d) { return '\uf192'; });
     */
}

function sizeIcon_2(svg) {

    svg.append('text')
        .attr('text-anchor', 'middle')
        //.attr('dominant-baseline', 'central')
        .attr('font-family', 'FontAwesome')
        .attr('font-size', '15px')
        .text(function(d) { return '\uf08e'; });
}


function dateIcon(svg) {

    svg.append('text')
        .attr('text-anchor', 'middle')
        //.attr('dominant-baseline', 'central')
        .attr('font-family', 'FontAwesome')
        .attr('font-size', '15px')
        .text(function(d) { return '\uf073'; });
}

