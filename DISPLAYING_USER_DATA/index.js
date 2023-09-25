let container = document.getElementById("cont");
let fetch_user = document.getElementById("fetch")

let data = [];

// get the data
fetch_user.addEventListener("click", function(){
    fetch("https://reqres.in/api/users") //fetch is a promise and promises takes time
        .then(function (res) {
            return res.json();
        })
        .then(function (res) {
            data = res.data;
            console.log("data:", data);
            displayData(data);
        });
})


function displayData(data) {
  data.forEach(function (users) {
    let div = document.createElement("div");

    let user_avatar = document.createElement("img"); // create img tag for user avatar
    user_avatar.src = users.avatar;

    let user_name = document.createElement("p"); // create p tag for users name
    user_name.innerText = users.first_name + " " + users.last_name;

    let user_email = document.createElement("p"); // create p tag for users email
    user_email.innerText = users.email;

    let user_id = document.createElement("h3") // create h3 tag for users ID
    user_id.innerText = users.id

    div.append(user_avatar, user_name, user_email);

    container.append(div);
  });
}