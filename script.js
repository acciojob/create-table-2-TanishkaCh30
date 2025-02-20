function createTable() {
   let table = document.querySelector("#myTable");
	let rows = prompt("Input number of rows");
	let columns = prompt("Input number of columns");

	if(isNaN(rows) || isNaN(columns)){
		return;
}
	if(rows<=0 || columns<=0){
		alert("Enter values greater than 0");
		return;
	}
	for(let i = 0 ; i<rows ; i++){
		let row = document.createElement("tr");
		for(let j = 0 ; j<columns ; j++){
			let column = document.createElement("td");
			column.innerText = `Row-${i} Column-${j}`;
			row.append(column);
}
		table.append(row);
	}
  
}

  


  