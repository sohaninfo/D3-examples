function showTime() {
	console.log("Showing time...");

	var parseDate = d3.time.format("%b %Y").parse,
        formatDate = d3.time.format("%b %Y"),
        bisectDate = d3.bisector(function(d) { return d.date; }).left;

    var format = d3.time.format("%b %Y");
	format.parse("2011-01-01"); // returns a Date
	format(new Date(2011, 0, 1)); // returns a string    

    console.log("date:" + format(new Date(2015, 12, 1)));  
    console.log("Parse date2:" + format.parse("JAN 2015"));
    console.log("parseDate:" + parseDate("JAN 2020"));

    var data = [
	  {date: new Date(2011,  1, 1), value: 0.5},
	  {date: new Date(2011,  2, 1), value: 0.6},
	  {date: new Date(2011,  3, 1), value: 0.7},
	  {date: new Date(2011,  4, 1), value: 0.8}
	];

	 //var data = [3, 6, 2, 7, 5, 4, 8]	
     var bisect = d3.bisector(function(d) { return d.value; }).right;
     var bisect_left = d3.bisector(function(d) { return d.value; }).left;

     console.log("bisector right:" + bisect(data, 0.6));
     console.log("bisector left:" + bisect_left(data, 0.6));


     //Linear scale
     var initialScaleData = [0, 1000, 3000, 2000, 5000, 4000, 7000, 6000, 9000, 8000, 10000];
     var linearScale = d3.scale.linear().domain([0,10000]).range([0,100]);
     for (var i = 0; i < initialScaleData.length; i++) {
     	console.log("Scale "+initialScaleData[i]+": " + linearScale(initialScaleData[i]));
     }




     //Axis
     var dataset = [
                [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
                [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
              ];
	var w = 500;
	var h = 50;

     var xScale = d3.scale.linear()
                     .domain([0, d3.max(dataset, function(d) { return d[0]; })])
                     .range([0, w]);

     var xAxis = d3.svg.axis()
                  .scale(xScale)
                  .orient("bottom");

    var svg = d3.select("body")
            .append("svg")
            .attr("width", 500)
            .attr("height", 50);              
                  
     svg.append("g")
         .call(xAxis);
                                 

}