let error_message = document.getElementById('error_message')
// let title = document.getElementById('form_title')

const form = document.getElementById("login_user");
const loginUser = async (e) => {
  e.preventDefault();
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (form.email.value.match(validRegex)) {
    let uri = "http://localhost:3000/users?email=";
    uri += `${form.email.value}`;
    const res = await fetch(uri);
    const user = await res.json();

    if (user[0]) {
      if (user[0].password === form.password.value) {
        user_details = {
          name: user[0].name,
          email: user[0].email,
          role: user[0].role,
        };
        localStorage.setItem("user", JSON.stringify(user_details));
        if (user[0].role === "user") {
          window.location.replace("/my-brand/index.html");
        } else {
          window.location.replace("/my-brand/dashboard/dashboard.html");
        }
   
      } 
      else {
        title.classList.add("edit_title");
        error_message.innerText = "Password incorrect";
      }
    } else {
      title.classList.add("edit_title");
      error_message.innerText = "User not registered";
    }
  } else {
    title.classList.add("edit_title");
    error_message.innerText = "Invalid email";
  }
};
form.addEventListener("submit", loginUser);
