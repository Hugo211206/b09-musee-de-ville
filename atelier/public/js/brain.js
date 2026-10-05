const LONGUEUR_MAX = 100;

export function validateMessage(raw) {
  if (typeof raw !== 'string') {
    return { ok: false, error: 'Écrivez un message avant d’envoyer.' };
  }
  const value = raw.trim();
  if (value === '') {
    return { ok: false, error: 'Écrivez un message avant d’envoyer.' };
  }
  if (value.length > LONGUEUR_MAX) {
    return { ok: false, error: `Message trop long : ${LONGUEUR_MAX} caractères maximum.` };
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
  if (texte === 'horaires') {
    return 'Le musée est ouvert du mardi au dimanche, de 10h à 18h, avec une nocturne le jeudi jusqu\'à 21h.';
  }
  if (texte === 'tarifs') {
    return 'Plein tarif 9 €, tarif réduit 6 €, gratuit pour les moins de 18 ans.';
  }
  return 'Je note votre message, un médiateur vous répondra.';
}
