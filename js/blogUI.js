
const getBlog = async () => {
  const res = await fetch(
    "https://mybrand-backend-production-309f.up.railway.app/api/blogs"
  );

  const postData = await res.json();

  const blogAdd = document.querySelector("#mainBlog");

  let template = "";

  postData.forEach((element) => {
    console.log(element);
    template = `
          <div>         
          <img class="center_image" src="${element.image}" alt="error">
          <h2>${element.title}</h2>
          <p>${element.description}</p>   
          </div>
          `;
  });

  blogAdd.innerHTML = template;
  
};

window.addEventListener("DOMContentLoaded", getBlog);
