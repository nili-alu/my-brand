
const fetchData = async () => {
    const res = await fetch("https://mybrand-backend-production-309f.up.railway.app/api/comments");
    const response = await fetch("https://mybrand-backend-production-309f.up.railway.app/api/blogs");
  
    const postData = await res.json();
    // const blogId = await response.json();
  
    const comment = document.querySelector("#tableValue");
  
    let template = "";
  
    postData.forEach((element) => {   
      // blogId.forin((id) => {

      template += `
    <tr>
      <td>${element._id}</td>
      <td>${element.email}</td>
      <td>${element.message}</td>
      <td>20</td>
      <td>
          
          <button onClick="deleteComment(${element.id})" id="delete"><i class='fa fa-trash'></i>Delete</button>
       </td>
    </tr>     
          `;
        
    });
  
    comment.innerHTML =template;
  };
  
  window.addEventListener('DOMContentLoaded', fetchData);
  
  const deleteComment = async (comment_id) => {
      await fetch(`https://mybrand-backend-production-309f.up.railway.app/api/comments/delete/${comment_id}`, {
          method: "DELETE",
  
      });
  }
  