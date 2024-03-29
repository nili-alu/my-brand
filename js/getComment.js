
const getComm = async () => {
    const res = await fetch("https://mybrand-backend-production-1869.up.railway.app/api/comments");
    const response = await fetch("https://mybrand-backend-production-1869.up.railway.app/api/blogs");
  
    const postData = await res.json();
    // const blogId = await response.json();
  
    const comment = document.querySelector("#tableValue");
  
    let template = "";
  
    postData.forEach((element) => {   
      // blogId.forin((id) => {

      template += `
    <tr>
      <td id="tableId">${element._id}</td>
      <td id="tableEmail">${element.email}</td>
      <td id="tableMessage">${element.message}</td>
      <td>          
          <button onClick="deleteComment('${element._id}')" id="delete"><i class='fa fa-trash'></i>Delete</button>
       </td>
    </tr>     
          `;
        
    });
  
    comment.innerHTML =template;
  };
  
  window.addEventListener('DOMContentLoaded', getComm);
  
  const deleteComment = async (comment_id) => {
      await fetch(`https://mybrand-backend-production-1869.up.railway.app/api/comments/delete/${comment_id}`, {
          method: "DELETE",
  
      })
      .then((response) => response.json())
      .then((data) => {
          // functionalities of delete
          location.reload();
    
      })
      .catch((err) => {
          alert(err)
      });
  }
  