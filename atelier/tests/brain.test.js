import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { validateMessage, replyTo } from '../public/js/brain.js';

// Limite du cahier personnel.
const N = 100;

describe('validateMessage', () => {
  it('refuse une chaîne vide', () => {
    assert.equal(validateMessage('').ok, false);
  });

  it('refuse un message fait seulement d’espaces', () => {
    assert.equal(validateMessage('   ').ok, false);
  });

  it('nettoie les espaces autour de « salut »', () => {
    assert.deepEqual(validateMessage('  salut  '), { ok: true, value: 'salut' });
  });

  it(`accepte ${N} caractères`, () => {
    assert.equal(validateMessage('a'.repeat(N)).ok, true);
  });

  it(`refuse ${N + 1} caractères`, () => {
    assert.equal(validateMessage('a'.repeat(N + 1)).ok, false);
  });
});

describe('replyTo', () => {
  it('répond pareil à « SALUT » et à « salut »', () => {
    assert.equal(replyTo('SALUT'), replyTo('salut'));
  });

  it('répond à « horaires » autrement qu’à une phrase inconnue', () => {
    assert.notEqual(replyTo('horaires'), replyTo('une phrase inconnue'));
  });

  it('répond à « tarifs » autrement qu’à une phrase inconnue', () => {
    assert.notEqual(replyTo('tarifs'), replyTo('une phrase inconnue'));
  });
});
