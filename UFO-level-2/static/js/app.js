// from data.js
//creating a copy of the data
const tableData = data;
const tbody =d3.select('tbody');


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
  // incase no relevant data is found !
  if (localdata.length==0) {
    tbody.html('');
    row = tbody.append('tr');
    cell = row.append('td');
    cell = row.append('td');
    cell = row.append('td');
    cell = row.append('td');
    cell = row.append('td');
    cell.align="center"
    cell.text('  ************************  No Data Found !  Try another search  ************************  ');
    cell = row.append('td');
    cell = row.append('td');
  }
  else {
    console.log(localdata)
    UFO_table(localdata);
  }
  
}



d3.selectAll("#filter-btn").on('click', myfilter);


UFO_table(tableData);



