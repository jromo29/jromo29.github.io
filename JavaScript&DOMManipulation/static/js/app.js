// from data.js
var tableData = data;

// YOUR CODE HERE!


var table = d3.select("tbody");

var button = d3.select("#filter-btn");

var inputField = d3.select("#datetime");

var inputValue = inputField.property("value");


//console.log(inputFilter)

//var tableRow = table.select("tr");

//tableRow.append("td").text("data1");

//console.log(data);



data.forEach(element => {

    var tableRow = table.append("tr");
    
    Object.entries(element).forEach(([key,value]) => {
        
        var tableCell = tableRow.append("td").text(value);
    });
});

function dateFilter() {
    
    // Stop Page Refresh
    d3.event.preventDefault();
    //console.log("Button Works");
    var inputValue = inputField.property("value");
    //console.log(inputValue);

    filterDataArray = tableData.filter(sighting => sighting.datetime == inputValue);
    //console.log(filterDataArray);

    //Delete all current table data

    table.text("");

    if (filterDataArray.length !== 0) {
    
        //input new table data
        filterDataArray.forEach(element => {

            var tableRow = table.append("tr");
            
            Object.entries(element).forEach(([key,value]) => {
                
                var tableCell = tableRow.append("td").text(value);
            });
        });
    } else {
        tableRow = table.append("tr").text("NO MATCHING RESULTS")
    }
    //Clean input field after button is pressed
    inputField.property("value","");

};

button.on("click", dateFilter);


