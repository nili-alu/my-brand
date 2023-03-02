// let error_message = document.getElementById('error_message')
// // let title = document.getElementById('form_title')

// const form = document.getElementById("login_user");
// const loginUser = async (e) => {
//   e.preventDefault();
//   let validRegex =
//     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//   if (form.email.value.match(validRegex)) {
//     let uri = "http://localhost:3000/users?email=";
//     uri += `${form.email.value}`;
//     const res = await fetch(uri);
//     const user = await res.json();

//     if (user[0]) {
//       if (user[0].password === form.password.value) {
//         user_details = {
//           name: user[0].name,
//           email: user[0].email,
//           role: user[0].role,
//         };
//         localStorage.setItem("user", JSON.stringify(user_details));
//         if (user[0].role === "user") {
//           window.location.replace("/my-brand/index.html");
//         } else {
//           window.location.replace("/my-brand/dashboard/dashboard.html");
//         }
   
//       } 
//       else {
//         title.classList.add("edit_title");
//         error_message.innerText = "Password incorrect";
//       }
//     } else {
//       title.classList.add("edit_title");
//       error_message.innerText = "User not registered";
//     }
//   } else {
//     title.classList.add("edit_title");
//     error_message.innerText = "Invalid email";
//   }
// };
// form.addEventListener("submit", loginUser);

// select the login form
const loginForm = document.querySelector('#login_user');
// const loader = document.querySelector('#loader');
// add a submit event listener to the form
loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  // get the email and password values from the form inputs
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  try {
    // fetch the list of users from the API endpoint
    const response = await fetch('http://localhost:3000/users');
    const users = await response.json();
    // find the user with the matching email and password
    const user = users.find((user) => user.email === email && user.password === password);

    if (!user) {
      // if the user is not found, show an error message
      alert('Invalid email or password');
      // loginForm.innerHTML = 'Login';
      window.location.href = '/my-brand/login.html';
      return;
    }

    // if the user is found, store their information in local storage
    localStorage.setItem('currentUser', JSON.stringify(user));

       // redirect the user to the dashboard page
       window.location.href = "/my-brand/dashboard/dashboard.html";
      } catch (error) {
        console.error(error);
        alert('An error occurred during login');
        window.location.href = '/my-brand/login.html';
      }
    });