import { validateMessage, replyTo } from './brain.js';
import { renderMessages } from './view.js';

const form = document.querySelector('#chat-form');
const status = document.querySelector('#status');
const message = document.querySelector('#message');
const messages = document.querySelector('#messages');
const suggestions = document.querySelector('#suggestions');
const effacer = document.querySelector('#effacer');
const CLE_HISTORIQUE = 'capweb.historique';
const historique = [];

try {
  const brut = localStorage.getItem(CLE_HISTORIQUE);
  if (brut !== null) {
    const relu = JSON.parse(brut);
    if (Array.isArray(relu)) {
      historique.push(...relu);
    } else {
      throw new Error('historique invalide');
    }
  }
} catch {
  historique.length = 0;
  status.textContent = 'Historique illisible : conversation réinitialisée.';
}
renderMessages(historique, messages);

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
  localStorage.setItem(CLE_HISTORIQUE, JSON.stringify(historique));
  renderMessages(historique, messages);
  message.value = '';
  status.textContent = '';
});

effacer.addEventListener('click', () => {
  if (!confirm('Effacer la conversation ?')) {
    return;
  }
  historique.length = 0;
  localStorage.removeItem(CLE_HISTORIQUE);
  renderMessages(historique, messages);
  status.textContent = '';
});
