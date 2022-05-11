import { login } from "./../../src/services/session-service.js";


function log()
{
    var user, password;
    user = document.getElementById("email").value;
    password = document.getElementById("password").value;

    login(user, password).then(console.log);
}


//login("test@employee.com", "123456").then(console.log);

// login("test@employee.com", "123456").then((user) => {
//     sessionStorage.setItem("domesticapp_token", user.token)
// });

//const token = sessionStorage.getItem("domesticapp_token");