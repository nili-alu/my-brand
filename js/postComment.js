const CommentForm = document.querySelector("#formCom");
const comment = async (event) => {
  event.preventDefault();
  const comm = {
    email: CommentForm.email.value,
    message: CommentForm.message.value,
  }
  await fetch('https://mybrand-backend-production-309f.up.railway.app/api/comments/create', {
    method: "POST",
    body: JSON.stringify(comm),
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  window.location.href='./blogPage.html';
};

CommentForm.addEventListener("submit", comment);