const ChatView = (() => {
  const chatWindow = document.getElementById("chat-window");
  const userInput = document.getElementById("user-input");
  const sendBtn = document.getElementById("send-btn");

  function appendMessage(message, sender = "user") {
    const msgDiv = document.createElement("div");
    msgDiv.textContent = message;
    msgDiv.classList.add("message");
    msgDiv.classList.add(sender === "user" ? "user-message" : "bot-message");
    chatWindow.appendChild(msgDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  function getInput() {
    return userInput.value;
  }

  function clearInput() {
    userInput.value = "";
  }

  function bindSend(handler) {
    sendBtn.addEventListener("click", handler);
    userInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") handler();
    });
  }

  return {
    appendMessage,
    getInput,
    clearInput,
    bindSend
  };
})();
