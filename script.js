let fullName = document.getElementById("name");
let username = document.getElementById("username");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let password = document.getElementById("password");
let confPass = document.getElementById("confPass");
let wasi = 1;

function validateForm(e) {
  e.preventDefault();

  const gender = document.querySelector('input[type="radio"]:checked');
  if (!gender) {
    document.getElementById("radiobtn-P").innerHTML = "Gender is required";
  } else {
    wasi = true;
    document.getElementById("radiobtn-P").innerHTML = "";
  }

  document.getElementById("nameerror").innerHTML = "";
  document.getElementById("usererror").innerHTML = "";
  document.getElementById("passerror").innerHTML = "";

  wasi = 1;

  if (fullName.value == "") {
    document.getElementById("nameerror").innerHTML = "Name is empty";
    wasi = 0;
  } else if (fullName.value.length < 3) {
    document.getElementById("nameerror").innerHTML =
      "Name require min 3 characters";
    wasi = 0;
  } else {
    document.getElementById("nameerror").innerHTML = "";
    wasi = 1;
  }

  if (username.value == "") {
    document.getElementById("usererror").innerHTML = "User Name is empty";
    wasi = 0;
  } else if (username.value.length < 3) {
    document.getElementById("usererror").innerHTML =
      "User Name require min 3 characters";

    wasi = 0;
  } else {
    document.getElementById("usererror").innerHTML = "";
    wasi = 1;
  }

  if (email.value == "") {
    document.getElementById("emailerror").innerHTML = "Email is empty";
    wasi = 0;
  } else if (email.value.length < 3) {
    document.getElementById("emailerror").innerHTML =
      "please enter valid email address";
    wasi = 0;
  } else {
    document.getElementById("emailerror").innerHTML = "";
    wasi = 1;
  }

  if (password.value == "") {
    document.getElementById("passerror").innerHTML = "password is empty";
    wasi = 0;
  } else {
    document.getElementById("passerror").innerHTML = "";
    wasi = 1;
  }

  if (confPass.value == "") {
    document.getElementById("conferror").innerHTML =
      "Confirm password is empty";
    wasi = 0;
  } else {
    document.getElementById("conferror").innerHTML = "";
    wasi = 1;
  }

  if (phone.value == "") {
    document.getElementById("numbererror").innerHTML = "number is empty";
    wasi = 0;
  } else if (phone.value.length < 11) {
    document.getElementById("numbererror").innerHTML =
      "please inter correct number";
    wasi = 0;
  } else {
    document.getElementById("numbererror").innerHTML = "";
    wasi = 1;
  }

  if (wasi === 1) {
    const data = {
      fullname: fullName.value,
      username: username.value,
      email: email.value,
      phone: phone.value,
      password: password.value,
      gender: gender.value,
    };

    showData(data);
  }
}

function showData(data) {
  const { fullname, username, email, phone, password, gender } = data;

  const table = document.querySelector("#dataTable");

  const tr = document.createElement("tr");

  const fullnameTd = document.createElement("td");
  fullnameTd.textContent = fullname;
  tr.appendChild(fullnameTd);

  const usernameTd = document.createElement("td");
  usernameTd.textContent = username;
  tr.appendChild(usernameTd);

  const emailTd = document.createElement("td");
  emailTd.textContent = email;
  tr.appendChild(emailTd);

  const phoneTD = document.createElement("td");
  phoneTD.textContent = phone;
  tr.appendChild(phoneTD);

  const passwordTd = document.createElement("td");
  passwordTd.textContent = password;
  tr.appendChild(passwordTd);

  const genderTd = document.createElement("td");
  genderTd.textContent = gender;
  tr.appendChild(genderTd);

  table.appendChild(tr);

  const form = document.querySelector("#main-container");
  form.reset();
}
