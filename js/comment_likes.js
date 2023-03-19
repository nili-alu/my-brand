const CommentForm = document.querySelector("#form");
const comment = async (event) => {
  event.preventDefault();
  const comm = {
    email: CommentForm.email.value,
    description: CommentForm.description.value,
  };
  await fetch(" https://mybrand-backend-production-309f.up.railway.app/api/comments/create", {
    method: "POST",
    body: JSON.stringify(comm),
    headers: {
      "Content-Type": "application/json",
    },
  });
//   alert("thank you for commenting, <br> your comment will help us to improve");
};

CommentForm.addEventListener("submit", comment);