// from data.js
var tableData = data;

// YOUR CODE HERE!


var table = d3.select("tbody");

var button = d3.select("#filter-btn");

var inputFieldDate = d3.select("#datetime");

var inputFieldCity = d3.select("#city");

//var inputValueDate = inputField.property("value");


//console.log(inputFilter)

//var tableRow = table.select("tr");

//tableRow.append("td").text("data1");

//console.log(data);



// data.forEach(element => {

//     var tableRow = table.append("tr");
    
//     Object.entries(element).forEach(([key,value]) => {
        
//         var tableCell = tableRow.append("td").text(value);
//     });
// });

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

//console.log(filteredData)

//Filter Functions:
function dateFilter(array, filterCriteria) {
    
    console.log("test")

    filterDataArray = array.filter(sighting => sighting.datetime == filterCriteria);
    
    console.log(filterDataArray);
    
    return  filterDataArray

}

function cityFilter(array,filterCriteria) {

    filterDataArray = array.filter(sighting => sighting.city == filterCriteria);

    return  filterDataArray

}

function createFilteredTable(){

    
}


function filterResults() {
    
    // Stop Page Refresh
    d3.event.preventDefault();
    //console.log("Button Works");
    
    var inputValueDate = inputFieldDate.property("value");
    //console.log(inputValue);
    var inputValueCity = inputFieldCity.property("value");

    if (inputValueDate !== "") {

        var df1 = dateFilter(tableData, inputValueDate);

        if (inputValueCity !== "") {
            
            var df2 = cityFilter(df1,inputValueCity);

            

        }
        

    }

    var df1 = dateFilter(tableData, inputValueDate)

    //Delete all current table data
    table.text("");

    if (df1.length !== 0) {
    
        createTable(df1)
        
    } else {
        
        tableRow = table.append("tr").text("NO MATCHING RESULTS")
    }
    
    //Clean input field after button is pressed
    inputFieldDate.property("value","");

};

button.on("click", filterResults);



