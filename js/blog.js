const form = document.querySelector("#form");
const addBlog = async (event) => {
  event.preventDefault();
  const doc = {
    title: form.title.value,
    description: form.description.value,
    image: form.myFile.value,
  }
  await fetch('https://mybrand-backend-production-309f.up.railway.app/api/blogs/create', {
    method: "POST",
    body: JSON.stringify(doc),
    headers: {
      "Content-Type": "application/json",
    },
  });
  alert("blog added successful");
  window.location.href='./dash_blog.html';
};

form.addEventListener("submit", addBlog);
