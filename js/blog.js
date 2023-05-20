const form = document.querySelector("#form");
const addBlog = async (event) => {
  event.preventDefault();
  const doc = {
    title: form.title.value,
    description: form.description.value,
    image: form.myFile.value,
  }
  await fetch('https://mybrand-backend-production-1869.up.railway.app/api/blogs/create', {
    method: "POST",
    body: JSON.stringify(doc),
    headers: {
      "Content-Type": "application/json",
    },
  });
 
  Toastify({
    text: "blog submitted successful",
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", 
    position: "right",
    stopOnFocus: true,
    style: {
      background:"#96c93d",
    },
    onClick: function(){} 
  }).showToast();
  
  window.location.href='./dash_blog.html';

};
form.addEventListener("submit", addBlog);
