const form = document.querySelector('form');
const chatHistory = document.getElementById('chat-history');

form.addEventListener('submit', function(event) {
  //prevent default submit
  event.preventDefault();

  //target input values
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;
  
  //create alert
  alert(name + ": " + message);

  //add to chat history
  const addChat = document.createElement('div');
  addChat.innerHTML = '<p>' + name + ': ' + message + '</p>';
  chatHistory.appendChild(addChat);
});
