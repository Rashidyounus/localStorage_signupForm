function RegisterForm() {
  event.preventDefault();
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var emailRegix = "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/";
  var password = document.getElementById("password");
  var cpassword = document.getElementById("cpassword");

  if (name.value == "") {
    Swal.fire({
      icon: "error",
      title: "name should not be empty...",
      text: "Something went wrong!",
    });
  } else if (email.value == "") {
    /*else if (!emailRegix.test(email.value)) {
    Swal.fire({
      icon: "error",
      title: "email should not be empty...",
    });
  }
  */
    Swal.fire({
      icon: "error",
      title: "email should not be empty...",
    });
  } else if (password.value == "") {
    Swal.fire({
      icon: "error",
      title: "Password should not be empty...",
    });
  } else if (cpassword.value !== password.value) {
    Swal.fire({
      icon: "error",
      title: "Password should not be same /not empty...",
    });
  } else {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${name.value} Registered Successfully`,
      showConfirmButton: false,
      timer: 1500,
    });
    var userData = {
      name: name.value,
      email: email.value,
      password: password.value,
      cpassword: cpassword.value,
    };

    localStorage.setItem("userData", JSON.stringify(userData));

    setTimeout(() => {
      window.location.href = "./dashboard.html";
    }, 2000);
  }

  //console.log(GetData);
}

function getData() {
  var getUserData = document.querySelector("#getData");
  var GetDataLocal = JSON.parse(localStorage.getItem("userData"));
  getUserData.innerHTML = `
  <ul>
  <li>Name:${GetDataLocal.name}</li>
  <li>Email:${GetDataLocal.email}</li>
  <li></li>
  </ul>`;
}

getData();

function redirection() {
  window.location.href = "/index.html";
}

function logout() {
  // localStorage.clear();
  setTimeout(redirection, 2000);
}

function login() {
  event.preventDefault();
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var GetDataLocal = JSON.parse(localStorage.getItem("userData"));

  if (!GetDataLocal) {
    Swal.fire({
      icon: "error",
      title: "User Not Found ",
    });
    setTimeout(() => {
      window.location.href = "./index.html";
    }, 2000);
  }

  if (GetDataLocal.email !== email.value) {
    Swal.fire({
      icon: "error",
      title: "invalid Email",
    });
  } else if (GetDataLocal.password !== password.value) {
    Swal.fire({
      icon: "error",
      title: "invalid Passwoord",
    });
  } else {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${GetDataLocal.name}  Successfully LogIn`,
      showConfirmButton: false,
      timer: 1500,
    });

    setTimeout(() => {
      window.location.href = "./dashboard.html";
    }, 2000);
  }
}
