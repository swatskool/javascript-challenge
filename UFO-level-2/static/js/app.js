// from data.js
//creating a copy of the data
const tableData = data;
const tbody =d3.select('tbody');

function printName(name) {
    console.log(name['datetime']);
  }


// creating functions and utilities
// function to publish the data table
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


// function to create a filter list based on users choices
var filters = {}
function updateFilters(){
  // var changedElements = (d3.select(this)).select('input');
  var changedElements = (d3).select('.form-group');
  console.log(changedElements);
  var elementValue = changedElements.property('value');
  var ID = changedElements.attr('id');
  console.log(changedElements.value);
  if (elementValue){
    filters[ID]=elementValue;

  }
  else {
    delete filters[ID];
  }
  filter_data();
}


// function to filter the data based on the list
function filter_data(){
  let localdata = tableData;
  Object.entries(filters).forEach(([key, value])=>{
    localdata=localdata.filter(row=> row[key] ===value);
  }
  );
  UFO_table(localdata);
}

function myfilter(){
  const inDate = d3.select('#datetime').property('value');
  const inCity = d3.select('#city').property('value');
  const inState = d3.select('#state').property('value');
  const inCountry = d3.select('#country').property('value');
  const inShape = d3.select('#shape').property('value');

  let localdata = tableData;
  if (inDate){localdata=localdata.filter(row => row.datetime=== inDate);}
  if (inCity){localdata=localdata.filter(row => row.city=== inCity);}
  if (inState){localdata=localdata.filter(row => row.state=== inState);}
  if (inCountry){localdata=localdata.filter(row => row.country=== inCountry);}
  if (inShape) {localdata=localdata.filter(row => row.shape=== inShape);}
  console.log(localdata.length)
  if (localdata.length==0) {localdata=localdata.filter(row => console.log(row.city));}
  console.log(localdata.length==0);
  console.log(localdata);
  // console.log(localdata.datetime)
  UFO_table(localdata);
}



// d3.selectAll("#filter-btn").on('click', updateFilters);
d3.selectAll("#filter-btn").on('click', myfilter);
// d3.selectAll("#filter-btn").on('change', updateFilters);

UFO_table(tableData);






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
  