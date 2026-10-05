import { validateMessage, replyTo } from './brain.js';
import { renderMessages } from './view.js';

const form = document.querySelector('#chat-form');
const status = document.querySelector('#status');
const message = document.querySelector('#message');
const messages = document.querySelector('#messages');
const suggestions = document.querySelector('#suggestions');
const historique = [];

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
  const resultat = validateMessage(message.value);
  if (!resultat.ok) {
    status.textContent = resultat.error;
    message.focus();
    return;
  }
  const ligneVous = { role: 'user', text: resultat.value };
  historique.push(ligneVous);
  const ligneCapWeb = { role: 'assistant', text: replyTo(resultat.value) };
  historique.push(ligneCapWeb);
  renderMessages(historique, messages);
  message.value = '';
  status.textContent = '';
});
