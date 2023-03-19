
const loginForm = document.querySelector("#login_user");
const username = document.querySelector("#email");
const password = document.querySelector("#password");
const error=document.getElementById("error");
let errMessage=""; 

 const login = async (event) => {
  event.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  
  axios.post('https://mybrand-backend-production-309f.up.railway.app/api/login/create', { email, password })
  .then(response => {
     // Store the token in a browser cookie or local storage for future requests
     document.cookie = `token=${response.data.token}; HttpOnly`;
     if(!(email || password)){
        
        window.location.href = './login.html';
     }
     alert("Saccessfully logged!!")
     window.location.href = '/my-brand/dashboard/dashboard.html';
     // Redirect the user to the protected page on the frontend
   
  })
  .catch(error => {
    alert(error.response.data.message);
  });
}

loginForm.addEventListener('submit', login); 
