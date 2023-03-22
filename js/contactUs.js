
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
  Toastify({
    text: "thank you for reaching out \n we will back to you soon",
    backgroundColor: "green",
    className: "toastify-success",
    gravity: "top", 
    position:"right",
    duration: 5000,
  }).showToast(
    window.location.href='../index.html'
  );
  location.reload();
};

ContactUS.addEventListener("submit", Contact);