const form = document.querySelector('#chat-form');
const status = document.querySelector('#status');
const message = document.querySelector('#message');
const messages = document.querySelector('#messages');
const suggestions = document.querySelector('#suggestions');

suggestions.addEventListener('click', (event) => {
  const bouton = event.target.closest('button');
  if (!bouton) {
    return;
  }
  message.value = bouton.textContent.trim();
  message.focus();
  message.setSelectionRange(message.value.length, message.value.length);
  status.textContent = 'Question copiée : modifiez-la ou envoyez-la.';
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const texte = message.value.trim();
  if (texte === '') {
    status.textContent = 'Écrivez un message avant d’envoyer.';
    message.focus();
    return;
  }
  const ligne = document.createElement('li');
  ligne.textContent = `Vous : ${texte}`;
  messages.append(ligne);
  message.value = '';
  status.textContent = '';
});
