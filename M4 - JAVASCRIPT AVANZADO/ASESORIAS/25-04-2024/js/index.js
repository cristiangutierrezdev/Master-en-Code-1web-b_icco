import cuentas from "../data/users.json" assert { type: "json" };

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const btn = document.querySelector("#login-btn");

function login() {
  const emailValue = email.value;
  const passwordValue = password.value;

  if (emailValue === "" || passwordValue === "") {
    alert("Please enter the email and password");
    return;
  }

  const user = cuentas.find(function (user) {
    if(user.email === emailValue){
      if(user.password === passwordValue){
        return true;
      }
    }
  });

  if(user === undefined){
    alert("Invalid email or password");
    return
  }

  console.log("Estoy logueado");
}

// btn.onclick = login;

btn.addEventListener("click", login);
