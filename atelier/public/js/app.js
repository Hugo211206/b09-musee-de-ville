const form = document.querySelector('#chat-form');
const status = document.querySelector('#status');
const message = document.querySelector('#message');
const suggestions = document.querySelector('#suggestions');

suggestions.addEventListener('click', (event) => {
  const bouton = event.target.closest('button');
  if (!bouton) {
    return;
  }
  message.value = bouton.textContent.trim();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  status.textContent = 'Interface prête.';
});
