const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;
  alert(name + ": " + message);
});
