// from data.js
const tableData = data;
function printName(name) {
    console.log(name['datetime']);
  }
const tbody =d3.select('tbody')
// console.log(tableData)
// YOUR CODE HERE!

function UFO_table(subdata){
  tbody.html('');
  subdata.forEach((drow)=> {
    const row = tbody.append('tr');
    Object.values(drow).forEach((val)=>{
      let cell = row.append('td');
      cell.text(val);
    });
  });
}

var filters = {}
function updateFilters(){
  var changedElements = d3.select(this).select('input');
  var elementValue = changedElements.property('value');
  var ID = changedElements.attr('id');
  if (elementValue){
    filters[ID]=elementValue;

  }
  else {
    delete filters[ID];
  }
  filter_data();
}

function filter_data(){
  let localdata = tableData;
  Object.entries(filters).forEach(([key, value])=>{
    localdata=localdata.filter(row=> row[key] ===value);
  }
  );
  UFO_table(localdata)
}


function whenclicked(){
  const inDate = d3.select('#datetime').property('value');
  let localdata = tableData;
  if (inDate){
    localdata=localdata.filter(row => row.datetime=== inDate);

  }
  UFO_table(localdata);
}
d3.selectAll("#filter-btn").on('click', whenclicked);
d3.selectAll("#filter-btn").on('change', updateFilters);

UFO_table(tableData)






// tableData.forEach(printName);
// // var tbody = d3.select("tbody");
// var row = tbody.append('tr')
// var cell = row.append("td")

// // function filter_date(info){
// //    return info.datetime = inDate

// }
// function UFO(subdata) {
  
//     var row = tbody.append('tr');
//     Object.entries(UFO).forEach(function([key,value]){
//         var cell = row.append("td");
//         console.log(key, value);
//         cell.text(value);
//     })
// }

// data.forEach(function(UFO) {
//     //   console.log(UFO);
//       var row = tbody.append("tr");
//       Object.entries(UFO).forEach(function([key, value]) {
//         // console.log(key, value);
//         var cell = row.append("td");
//         cell.text(value);
//   });
// });




// var inputdate = d3.select('#datetime');
// inputdate.on('change', function(){
//    inDate = d3.event.target.value;
//   console.log(inDate);
// }
// )

// button.on("click", function() {
//        var output = tableData.filter(tableData => tableData.datetime == inDate)
//        console.log(output)
//        tbody.html('')
       

//         output.forEach(function(UFO) {
//             //  how to clear table before appending new results?
//             // how to create a general function which can be called by all modules
             
//             var row = tbody.append("tr");
//               Object.entries(UFO).forEach(function([key, value]) {
//                 // console.log(key, value);
               
//                 var cell = row.append("td");
//                 cell.text(value);
//           });
//         });




     
//   });
  