const btn = document.querySelector(".button");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let message = document.getElementById("error");

  if (password.lenght != 0) {
    if (password == confirmPassword) {
      message.textContent = "Passwords match";
    } else {
      message.textContent = "Passwords don't match";
    }
  }
});
