import { DevisMetier } from '../models/Devis';
import { isRight } from 'fp-ts/lib/Either';
import { devisFixture } from './fixtures/DevisFixture';
import { byLocation } from '../services/DevisService';

describe('Devis', () => {
  it('should decode and parse devis', () => {
    const value = DevisMetier.decode(devisFixture)
    expect(isRight(value)).toBe(true)
    expect(value.right.title).toBe("Exemple devis pour la rénovation complète de votre appartement")
  })
});

describe('DevisService', () => {
  const devis = DevisMetier.decode(devisFixture).right
  it('should group by piece', () => {
    const devisPiece = byLocation(devis);
    expect(devisPiece.prixTotalHT).toBe(devis.prixTotalHT)
    expect(devisPiece.prixTotalTTC).toBe(devis.prixTotalTTC)
    expect(devisPiece.prixTotalHTAvantRemise).toBe(devis.prixTotalHTAvantRemise)
  })
});

