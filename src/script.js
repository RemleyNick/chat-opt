///////////////////////////////////
//backend
////////////////////////////////////
const users = {"zzz": "Nick",
              "123": "John"
            }
function login() {
  return "zzz";
}
/////////////////////////////////////
const chatHistory = document.getElementById('chat-history');
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  //prevent default submit
  event.preventDefault();

  //target input values
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  
  if (users["zzz"]) {
   displayNameChat({name, message})
  }

});

function displayNameChat({name, message}) {
  console.log(name, message);

    //add to chat history
    const addChat = document.createElement('div');
    addChat.innerHTML = '<p>' + '<strong>' + name + '</strong>' + ': ' + message + '</p>';
    chatHistory.appendChild(addChat);
  
    //clear message input
    document.getElementById('message').value = "";
}