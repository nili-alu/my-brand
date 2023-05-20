let blogId = "";
const fetchData = async () => {
  const res = await fetch(
    "https://mybrand-backend-production-1869.up.railway.app/api/blogs"
  );

  const postData = await res.json();

  const blogAdd = document.querySelector("#container");

  let template = "";

  postData.forEach((element) => {
    console.log(element);
    template += `
          <article id="blog" class="blog">
          <img src="${element.image}" id="image" alt="">
          <h3>${element.title}</h3>
          <p>${element.description}</p>
  
          <button type="submit" onclick="openForm('${element._id}')" id="modify" class="modify">Modify</button>
          
          <button type="submit" onClick="deleteBlog('${element._id}')" class="delete">Delete</button>
      </article>
          
          `;
  });

  blogAdd.innerHTML = template;
};

window.addEventListener("DOMContentLoaded", fetchData);


function deleteBlog(article_id)  {

  fetch(`https://mybrand-backend-production-309f.up.railway.app/api/blogs/delete/${article_id}`,
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


const formContainer = document.getElementById("formContainer");
const formInput = document.getElementById("formModify");

formContainer.style.display = "none";

const openForm = async (article_id) => {

  const response = await fetch(`https://mybrand-backend-production-309f.up.railway.app/api/blogs/${article_id}`);
  const data = await response.json();

  formContainer.style.display = "block";

  formInput.title.value = data.title;
  formInput.description.value = data.description;
  formInput.myFile.value = data.image;
  
  formInput.elements.id.value=data._id;
};

const update = async () => {
  const id=formInput.elements.id.value;
  const post = {
    title: formInput.title.value,
    description: formInput.description.value,
    image: formInput.myFile.value,
 
  };
  const response = await fetch(`https://mybrand-backend-production-309f.up.railway.app/api/blogs/update/${id}`, {
  method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });
  if(response.ok){
    location.reload()
  }
}
if (formInput != null){

  formInput.addEventListener("submit", (e) => {
    e.preventDefault();
    update();
})
}

