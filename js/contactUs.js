// import Toastify from 'toastify-js'
// import "toastify-js/src/toastify.css"

const ContactUS = document.querySelector("#form");
const Contact = async (event) => {
  event.preventDefault();
  const Con = {
    email: ContactUS.email.value,
    subject:ContactUS.subject.value,
    message: ContactUS.message.value,
    
  };
 
  await fetch("https://mybrand-backend-production-309f.up.railway.app/api/messages/create", {
    method: "POST",
    body: JSON.stringify(Con),
    headers: {
      "Content-Type": "application/json",
    },
  });
  // Toastify({
  //   text: "thank you for reaching out \n we will back to you soon",
  //   duration: 3000,
  //   destination: "https://github.com/apvarun/toastify-js",
  //   newWindow: true,
  //   close: true,
  //   gravity: "top", // `top` or `bottom`
  //   position: "left", // `left`, `center` or `right`
  //   stopOnFocus: true, // Prevents dismissing of toast on hover
  //   style: {
  //     background: "linear-gradient(to right, #00b09b, #96c93d)",
  //   },
  //   onClick: function(){} // Callback after click
  // }).showToast();
 
  location.reload();
  alert("thank you for reaching out \n we will back to you soon")
};

ContactUS.addEventListener("submit", Contact);