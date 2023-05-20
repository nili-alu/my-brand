const subscriber = document.querySelector("#form2");
const subs = async (event) => {
  event.preventDefault();
  const doc = {
    email: subscriber.email.value,
   
  };
  await fetch("https://mybrand-backend-production-1869.up.railway.app/api/subs", {
    method: "POST",
    body: JSON.stringify(doc),
    headers: {
      "Content-Type": "application/json",
    },
  });
//   alert("thank you for commenting, <br> your subs will help us to improve");
};

subscriber.addEventListener("submit", subs);