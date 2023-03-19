const fetchData = async () => {
  const res = await fetch(
    "https://mybrand-backend-production-309f.up.railway.app/api/blogs"
  );

  const postData = await res.json();
  console.log("data");

  const blogAdd = document.querySelector("#mainBlog");

  let template = "";

  postData.forEach(element => {
    
  });((element) => {
    template += `
          <div>         
          <img class="center_image" src="${element.image}" alt="error">
          <h2>${element.title}</h2>
          <p>${element.description}</p>   
          </div>
          `;
  });

  blogAdd.innerHTML = template;
};
window.addEventListener("DOMContentLoaded", fetchData);

let likes = document.getElementById('no_likes')

async function renderArticle() {
    let res = await fetch(`https://mybrand-backend-production-309f.up.railway.app/api/blogs/640f7370426622dc3c462c38`)
    article = await res.json()

    likes.innerText = article.likes

    
window.addEventListener('DOMContentLoaded', renderArticle)


let refresh_likes = async () => {
    likes.innerHTML = `<p class="no_likes" id="no_likes">${article.likes}</p>`
}

let like_icon = document.getElementById("like_icon");
let likes_div = document.getElementById("likes_div");

like_icon.addEventListener("click", (e) => {
  e.preventDefault();
  if (localStorage.getItem("user") === null) {
    popup_container.style.visibility = "visible";
  } else {
    let liked = document.createElement("i");
    liked.innerHTML = '<i class="fa-solid fa-heart"></i>';
    likes_div.replaceChild(liked, like_icon);

    article.likes += 1;
    fetch(`http://localhost:3000/post/id/${article_id}`, {
      method: "PATCH",
      body: JSON.stringify({ likes: article.likes }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((json) => (likes.innerText = article.likes));
  }
})
}
likes.addEventListener('like', renderArticle);
