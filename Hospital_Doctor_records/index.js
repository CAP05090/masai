
// fill in javascript code here
let myForm = document.querySelector("form")
let tBody = document.querySelector("tbody")

myForm.addEventListener("submit", function(event){
    event.preventDefault();
    let Dname = document.getElementById("name").value
    let DID = document.getElementById("docID").value
    let department = document.getElementById("dept").value
    let experience = document.getElementById("exp").value
    let email = document.getElementById("email").value
    let mobile = document.getElementById("mbl").value

    let table = document.querySelector("table");
	let newRow = table.insertRow(table.rows.length);
			
	// Insert data into cells of the new row
	newRow.insertCell(0).innerHTML = Dname;
	newRow.insertCell(1).innerHTML = DID;
	newRow.insertCell(2).innerHTML = department;
	newRow.insertCell(3).innerHTML = experience;
    newRow.insertCell(4).innerHTML = email;
	newRow.insertCell(5).innerHTML = mobile;
    newRow.insertCell(6).innerHTML = myRole(experience);
	newRow.insertCell(7).innerHTML = '<button onclick="deleteData(this)">Delete</button>';
})

function myRole(exp){
    if (exp > 5){
        return "Senior" 
    }
    else if(exp<=5 && exp>=2){
        return "Junior"
    }
    else{
        return "Trainee"
    }
}

function deleteData(button) {   
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
           