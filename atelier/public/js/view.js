export function renderMessages(messages, container) {
  const lignes = [];
  for (const message of messages) {
    if (message.role === 'user') {
      const ligne = document.createElement('li');
      ligne.textContent = `Vous : ${message.text}`;
      lignes.push(ligne);
    } else if (message.role === 'assistant') {
      const ligne = document.createElement('li');
      ligne.textContent = `Cap Web : ${message.text}`;
      lignes.push(ligne);
    }
  }
  container.replaceChildren(...lignes);
}
