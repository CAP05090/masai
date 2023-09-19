// fill in javascript code here
let myForm = document.querySelector("form")
let Ename = document.getElementById("name")
let EID = document.getElementById("employeeID")
let depeartment = document.getElementById("department")
let experience = document.getElementById("exp")
let email = document.getElementById("email")
let mobile = document.getElementById("mbl")
let tBody = document.querySelector("tbody")


let alldata = []
myForm.addEventListener("submit", function(event){
event.preventDefault();
let data = {
    Name:Ename.value,
    EID : EID.value,
    departmen : depeartment.value,
    experience : experience.value,
    email : email.value,
    mobile : mobile.value
}
alldata.push(data)

tBody.innerHTML = ""
alldata.map((ele)=>{
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    let td5 = document.createElement("td")
    let td6 = document.createElement("td")


    td1.innerText = ele.Name
    td2.innerText = ele.EID
    td3.innerText = ele.departmen
    td4.innerText = ele.experience
    td5.innerText = ele.email
    td6.innerText = ele.mobile

    tr.append(td1, td2, td3, td4, td5, td6)
    tBody.append(tr)
})
})
