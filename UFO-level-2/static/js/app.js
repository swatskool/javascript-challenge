// from data.js
var tableData = data;
function printName(name) {
    console.log(name['datetime']);
  }
// console.log(tableData)
// YOUR CODE HERE!
tableData.forEach(printName);
var tbody = d3.select("tbody");
var row = tbody.append('tr')
var cell = row.append("td")

// function filter_date(info){
//    return info.datetime = inDate

// }
// function UFO(subdata) {
//     var row = tbody.append('tr');
//     Object.entries(UFO).forEach(function([key,value]){
//         var cell = row.append("td");
//         console.log(key, value);
//         cell.text(value);
//     })
// }

data.forEach(function(UFO) {
    //   console.log(UFO);
      var row = tbody.append("tr");
      Object.entries(UFO).forEach(function([key, value]) {
        // console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
  });
});


var inDate
var button = d3.select("#filter-btn");
var inputdate = d3.select('#datetime');
inputdate.on('change', function(){
   inDate = d3.event.target.value;
  console.log(inDate);
}
)

button.on("click", function() {
       var output = tableData.filter(tableData => tableData.datetime == inDate)
       console.log(output)
        output.forEach(function(UFO) {
            //  how to clear table before appending new results?
            // how to create a general function which can be called by all modules
              var row = tbody.append("tr");
              Object.entries(UFO).forEach(function([key, value]) {
                // console.log(key, value);
                var cell = row.append("td");
                cell.text(value);
          });
        });




     
  });
  