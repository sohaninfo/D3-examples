/**
 * Created by Sohan on 3/25/2016.
 */

 function appendP() {
    var p = d3.select("body").append("p");
    p.text("This is the paragraph appended by d3!");
}

function appendP2() {
    var p = d3.select("body").append("p");
    p.text("This is the second paragraph appended by d3! It is in color.")
    .style("color", "blue");
}

function appendP3() {
    var dataset = [1, 2, 3, 4, 5];

    var p = d3.select("body").selectAll("p")
    .data(dataset)
    .enter()
    .append("p")
    .text("New pragraph added through dataset.");
}

function appendP4() {
    var dataset = [1, 2, 3, 4, 5];

    var p = d3.select("body").selectAll("p")
    .data(dataset)
    .enter()
    .append("p")
    .text("New pragraph:")
    .text(function(d){return "This is number: " + d;});
}

function appendP5() {
    var dataset = [1, 2, 3, 4, 5];

    var p = d3.select("body").selectAll("p")
    .data(dataset)
    .enter()
    .append("p")
    .text("New pragraph")
    .style("color", function(d) {
        if (d % 2 == 0)
            return "blue";
        else
            return "red";
    });
}