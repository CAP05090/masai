let myForm = document.querySelector("form")
let task = document.getElementById("task")
let priority = document.getElementById("priority")
let tBody = document.querySelector("tbody")


let alldata = []
myForm.addEventListener("submit", function(event){
event.preventDefault();
let data = {
    input : task.value,
    priority : priority.value
}
alldata.push(data)

tBody.innerHTML = ""
alldata.map((ele)=>{
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")

    td1.innerText = ele.input
    td2.innerText = ele.priority

    tr.append(td1, td2)
    tBody.append(tr)
})
})



