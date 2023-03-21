
const getQuerries = async () => {
    const res = await fetch("https://mybrand-backend-production-309f.up.railway.app/api/messages");
    const postData = await res.json();
  
    const comment = document.querySelector("#tableValue");
  
    let template = "";
  
    postData.forEach((element) => {   
  
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
  
  

const deleteMessage = async (message_id) => {
  fetch(
    `https://mybrand-backend-production-309f.up.railway.app/api/messages/delete/${message_id}`,
  {
      method: "DELETE"
  });
      getQuerries();
      location.reload();

  };
  window.addEventListener('DOMContentLoaded', () => getQuerries());
    

