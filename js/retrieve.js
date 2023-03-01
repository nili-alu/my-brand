const fetchData = async () => {
  const res = await fetch("http://localhost:3000/posts");

  const postData = await res.json();

  const blogAdd = document.querySelector("#container");

  let template = "";

  postData.forEach((element) => {
    template += `
          <article id="blog" class="blog">
          <img src="${element.image}" id="image" alt="">
          <h3>${element.title}</h3>
          <p>${element.description}</p>
  
          <button type="submit" onclick='modifyblog(${element.id});' id="modify" class="modify">Modify</button>
          <button type="submit" id="end-editing">Done</button>
          <button type="submit" onclick='deleteblog(${element.id});' class="delete">Delete</button>
      </article>
          
          `;
  });

  blogAdd.innerHTML = template;
};

window.addEventListener("DOMContentLoaded", fetchData);

const deleteblog = async (article_id) => {
  await fetch(`http://localhost:3000/posts/${article_id}`, {
    method: "DELETE",
  });
};

const modifyblog =  async (article_id) => {
    await fetch(`http://localhost:3000/posts/${article_id}`, {
   

// modify.addEventListener("click", 
// function(){
//     modifyblog.contentEditable =true;
});
}
