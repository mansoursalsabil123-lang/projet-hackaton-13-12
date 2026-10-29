// USER
let user = JSON.parse(localStorage.getItem('user')) || {};

// ACCOUNT MODAL
function openAccount() {
  document.getElementById('accountModal').style.display = 'block';
  document.getElementById('accName').value = user.name || '';
  document.getElementById('accEmail').value = user.email || '';
  document.getElementById('accAge').value = user.age || '';
  document.getElementById('accLanguage').value = user.language || '';
}
function saveAccount() {
  user.name = document.getElementById('accName').value;
  user.email = document.getElementById('accEmail').value;
  user.age = document.getElementById('accAge').value;
  user.language = document.getElementById('accLanguage').value;
  localStorage.setItem('user', JSON.stringify(user));
  document.getElementById('welcome').innerText = `Hi ${user.name}, hope you're feeling better `;
  closeAccount();
}
function closeAccount() { document.getElementById('accountModal').style.display = 'none'; }

// CHATBOT
function sendMessage() {
  const input = document.getElementById('chatInput');
  const chat = document.getElementById('chat');
  const text = input.value.trim();
  if(!text) return;
  chat.innerHTML += `<div class='user'>${text}</div>`;
  let reply = "I’m here with you. Share more if you want ";
  if(text.toLowerCase().includes("die") || text.toLowerCase().includes("suicide")){
    reply = "I’m concerned about your safety. Call emergency services (197/198) or reach someone you trust.";
  }
  chat.innerHTML += `<div class='bot'>${reply}</div>`;
  input.value = "";
  chat.scrollTop = chat.scrollHeight;
}
// STAR JAR GAME
function showQuote(text){ document.getElementById('quote').innerText = text; }
