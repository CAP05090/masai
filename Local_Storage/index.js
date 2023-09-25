let Name = document.getElementById("name")
let age = document.getElementById("age")
let add_data = document.getElementById("submit")

let retrieve_data = document.getElementById('retrieve')
let tBody = document.querySelector("tbody")

add_data.addEventListener("click", function(event){
    event.preventDefault()
    localStorage.setItem('name', Name.value)
    localStorage.setItem("age", age.value)
    console.log(Name.value, age.value)
})
let alldata = []
retrieve_data.addEventListener("click", function(event){
    event.preventDefault()
    let local_data = {
        Name:localStorage.getItem("name"),
        Age:localStorage.getItem("age")
    }
    alldata.push(local_data)
    
tBody.innerHTML = ""
alldata.map((ele)=>{
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")

    td1.innerText = ele.Name
    td2.innerText = ele.Age

    tr.append(td1, td2)
    tBody.append(tr)
})
})