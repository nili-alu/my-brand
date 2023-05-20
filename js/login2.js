
const loginForm = document.querySelector("#login_user");
const username = document.querySelector("#email");
const password = document.querySelector("#password");
const error=document.getElementById("error");
let errMessage=""; 

 const login = async (event) => {
  event.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  
  axios.post('https://mybrand-backend-production-1869.up.railway.app/api/login/create', { email, password })
  .then(response => {
     // Store the token in a browser cookie or local storage for future requests
     document.cookie = `token=${response.data.token}; HttpOnly`;
     if(!(email || password)){
        
        window.location.href = './login.html';
     }
   //   alert("Successfully logged!!")
   // Toastify({
   //    text: "Sorry your comment is not sent!!",
   //    duration: 3000,
   //    newWindow: true,
   //    close: true,
   //    gravity: "top", 
   //    position: "center",
   //    stopOnFocus: true,
   //    style: {
   //      background:"#96c93d",
   //    },
   //    onClick: function(){} 
   //  }).showToast();
     window.location.href = "./dashboard/dash_blog.html";

   
  })
  .catch(error => {
    toastr.error(error.response.data.message);
  });
}

loginForm.addEventListener('submit', login); 
