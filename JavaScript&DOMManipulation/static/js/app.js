// from data.js
var tableData = data;

// YOUR CODE HERE!


var table = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");
var filteredDataArray = []

function createTable(array) {

    array.forEach(element => {
    
        var tableRow = table.append("tr");
        
        Object.entries(element).forEach(([key,value]) => {
            
            var tableCell = tableRow.append("td").text(value);
        });
    });
}

createTable(tableData);

//Filter Functions:
function dateFilter(array, filterCriteria) {
    
    filterDataArray = array.filter(sighting => sighting.datetime == filterCriteria);
    return  filterDataArray
}

function cityFilter(array,filterCriteria) {

    filterDataArray = array.filter(sighting => sighting.city == filterCriteria);
    return  filterDataArray
}

function createTable2(array) {

    //Delete all current table data
    table.text("");
    
    console.log(array.length);
    console.log(array);

    if (array.length !== 0) {
        createTable(array);
        
    } else {
        tableRow = table.append("tr").text("NO MATCHING RESULTS")
    }
}


function filterResults() {
    
    // Stop Page Refresh
    d3.event.preventDefault();
        
    var inputValueDate = inputFieldDate.property("value");
    //console.log(inputValueDate);
    
    var inputValueCity = inputFieldCity.property("value");
    //console.log(inputValueCity)

    if (inputValueDate !== "" && inputValueCity !== "") {
     
        var df1 = dateFilter(tableData, inputValueDate);
        var df2 = cityFilter(df1,inputValueCity);
        createTable2(df2);
        
    
    }else if(inputValueCity !== "") {
            
        var df2 = cityFilter(tableData,inputValueCity);
        createTable2(df2);
    }else if (inputValueDate !== "") {
            
        var df1 = dateFilter(tableData,inputValueDate);
        createTable2(df1);

    }
    
    //Clean input field after button is pressed
    inputFieldDate.property("value","");
    inputFieldCity.property("value","");

}

button.on("click", filterResults);



