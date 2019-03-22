// @TODO: YOUR CODE HERE!

// Define SVG area dimensions
var svgWidth = 700;
var svgHeight = 500;

// Define the chart's margins as an object
var chartMargin = {
  top: 20,
  right: 20,
  bottom: 20,
  left: 20
};

// Define dimensions of the chart area
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// Select body, append SVG area to it, and set the dimensions
var svg = d3
  .select("#scatter")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// Append a group to the SVG area and shift ('translate') it to the right and down to adhere
// to the margins set in the "chartMargin" object.
var chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// Load data

d3.csv("assets/data/data.csv").then(function(censusData){
  console.log(censusData);
// d3.csv("assets/data/data.csv", function(error, censusData) {
//     if (error) return console.log(error);
  
//     console.log(censusData);
    
    // cast the data from the csv as numbers
    censusData.forEach(function(data) {
    data.poverty = +data.poverty;
    data.healthcare = +data.healthcare;
    })
    
    // Create a scale for your independent (x) coordinates
    var xScale = d3.scaleLinear()
    .domain([0,d3.max(censusData, d => d.poverty)])
    .range([0, chartWidth]);
    //console.log(xScale);

    // Create a scale for your dependent (y) coordinates
    var yScale = d3.scaleLinear()
    .domain([0,d3.max(censusData, d => d.poverty)])
    .range([chartHeight, 0]);
    //console.log(yScale);
    console.log("Test");

    // create axes
    var yAxis = d3.axisLeft(yScale);
    
    var xAxis = d3.axisBottom(xScale);
    
    // set x to the bottom of the chart
    chartGroup.append("g")
    .attr("transform", `translate(0, ${chartHeight})`)
    .call(xAxis);

    // set y to the y axis
    chartGroup.append("g")
    .call(yAxis);

  //Circles
  var circles = svg.selectAll('circle')
      .data(censusData)
      .enter()
    .append('circle')
      .attr('cx',function (censusData) { return xScale(censusData.poverty) })
      .attr('cy',function (censusData) { return yScale(censusData.healthcare) })
      .attr('r','10')
      .attr('stroke','black')
      .attr('stroke-width',1)
      .attr('fill','LightBlue');
      //.attr('fill',function (d,i) { return colorScale(i) })
      // .on('mouseover', function () {
      //   d3.select(this)
      //     .transition()
      //     .duration(500)
      //     .attr('r',20)
      //     .attr('stroke-width',3)




})