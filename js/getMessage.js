
const fetchData = async () => {
    const res = await fetch("https://mybrand-backend-production-309f.up.railway.app/api/messages");
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
      <button onClick="deleteMessage('${element._id}')" id="delete"><i class='fa fa-trash'></i>Delete</button>
   </td>
    
    </tr>     
          `;
        
    });
  
    comment.innerHTML =template;
  };
  
  window.addEventListener('DOMContentLoaded', fetchData);
    

function deleteMessage(message_id)  {

  fetch(`https://mybrand-backend-production-309f.up.railway.app/api/messages/delete/${message_id}`,
  {
      method: "DELETE"
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

