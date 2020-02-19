const button = document.querySelector("button");
const msg = document.querySelector(".lastMessage");

button.addEventListener("click", function() {
  event.preventDefault();
  let text = document.querySelector("#message").value;
  let message = document.createElement("span");
  message.innerHTML = text;
  msg.prepend(message);
  console.log(message);
});
