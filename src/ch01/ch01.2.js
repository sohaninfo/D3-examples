function drawTable() {
	var tbody = d3.select("body").append("table").append("body");
	var trow = tbody.append("tr");
	
	trow.append("td").text("Column1");
	trow.append("td").text("Column2");

	for(var i = 0; i < 10; i++) {
		var trow = tbody.append("tr");
	
		trow.append("td").text("Row:" + i);
		trow.append("td").text("Column1");
		trow.append("td").text("Column2");

	}
}

function drawCircle() {
	var svg = d3.select("body").append("svg").attr("width", 400).attr("height", 400);
      
    var circle = svg.append("circle").attr("cx", 30).attr("cy", 30).attr("r", 20);
    circle.attr("fill", '#456789');

    var circle2 = svg.append("circle").attr("cx", 230).attr("cy", 30).attr("r", 20);
    circle2.attr("fill", '#456789');

  	var circle3 = svg.append("circle").attr("cx", 30).attr("cy", 230).attr("r", 20);
  	circle3.attr("fill", '#982344');

	var circle4 = svg.append("circle").attr("cx", 230).attr("cy", 230).attr("r", 20);
  	circle4.attr("fill", '#982344');

  	var line1 = svg.append("line").attr("x1", 30).attr("y1", 30).attr("x2", 230).attr("y2", 30);
  	line1.attr("stroke-width", 2)
	.attr("stroke", "black");

	var line2 = svg.append("line").attr("x1", 230).attr("y1", 30).attr("x2", 30).attr("y2", 230);
  	line2.attr("stroke-width", 2)
	.attr("stroke", "black");



}