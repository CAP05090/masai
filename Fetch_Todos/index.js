let tBody = document.getElementsByTagName("tbody")

async function fetchTodo(){
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/todos")
        let data = await res.json()
        printData(data)
        // console.log("data: ", data)
    } catch (error) {
        console.log(error)
    }
}

function printData(data){
    data.forEach((item) => {

        let table = document.querySelector("table");
	    let newRow = table.insertRow(table.rows.length);

        newRow.insertCell(0).innerHTML = item.id;
        newRow.insertCell(1).innerHTML = item.title;
        newRow.insertCell(2).innerHTML = item.completed;
    });
}

fetchTodo()