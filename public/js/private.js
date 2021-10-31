/**
 * 
 */
var rIndexjL, tableJL = document.getElementById("janjiLuaran");
function addRow() {
	var newRow = tableJL.insertRow(tableJL.length);
	var cell = newRow.insertCell(0);
	cell.innerHTML = "Test";
	selectedRow();
}

function selectedRow() {
	for(var i = 0; i <tableJL.rows.length; i++) {
		tableJL.rows[i].onclick = function() {
			rIndexjL = this.rowIndex;
			console.log(rIndexjL);
			console.log(this.cells[0].innerHTML); 
		}
	}
}
selectedRow();