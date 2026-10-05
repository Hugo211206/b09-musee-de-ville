export function validateMessage(raw) {
  if (typeof raw !== 'string') {
    return { ok: false, error: 'Écrivez un message avant d’envoyer.' };
  }
  const value = raw.trim();
  if (value === '') {
    return { ok: false, error: 'Écrivez un message avant d’envoyer.' };
  }
  return { ok: true, value };
}

export function replyTo(message) {
  const texte = typeof message === 'string' ? message.trim().toLowerCase() : '';
  if (texte === 'salut' || texte === 'bonjour') {
    return 'Bonjour ! Posez votre question sur le musée.';
  }
  if (texte === 'aide') {
    return 'Dites « test », « salut » ou posez votre question sur le musée.';
  }
  if (texte === 'test') {
    return 'Test reçu : le cerveau répond.';
  }
  return 'Je note votre message, un médiateur vous répondra.';
}
