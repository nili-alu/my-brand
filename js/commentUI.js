
const fetchData = async () => {
    const res = await fetch("https://mybrand-backend-production-1869.up.railway.app/api/comments");
   
    const postData = await res.json();
    // const blogId = await response.json();
  
    const comment = document.querySelector("#blogComments");
  
    let template = "";
  
    postData.forEach((element) => {   
      // blogId.forin((id) => {
        
      template += `
      
        <div id="commentspace">
      <h6 id="email">Name: ${element.email}</h6>
      <p id="message">${element.message}</p>
        </div>
          `;
        
    });
  
    comment.innerHTML =template;
    Toastify({
      text: "Your comment has been added successfully",
      backgroundColor: "green",
      className: "toastify-success",
    }).showToast();
    
  };
  
  window.addEventListener('DOMContentLoaded', fetchData);

  