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

// function to populate the table when the date is selected
function whenclicked(){
  d3.event.preventDefault();
  const inDate = d3.select('#datetime').property('value');
  let localdata = tableData;
  if (inDate){
    localdata=localdata.filter(row => row.datetime=== inDate);

  }
  UFO_table(localdata);
}
d3.selectAll("#filter-btn").on('click', whenclicked);

// print out the whole data
UFO_table(tableData)