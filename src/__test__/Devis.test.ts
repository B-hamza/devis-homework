import { Devis } from '../models/Devis';
import { isRight } from 'fp-ts/lib/Either';
import { devisFixture } from './fictures/DevisFixture';

describe('Devis', () => {
  it('should decode and parse devis', () => {
    const value = Devis.decode(devisFixture)
    expect(isRight(value)).toBe(true)
    expect(value.right.title).toBe("Exemple devis pour la rénovation complète de votre appartement")
  })
});

