import * as t from 'io-ts';

export const Unite = t.keyof({
  unitaire: null,
  m2: null,
  m: null
})

export const Location = t.type({
  uuid: t.string,
  quantite: t.number
})

export type Location = t.TypeOf<typeof Location>

export const LocationsDetails = t.type({
  locations: t.array(Location),
  additionalQuantity: t.number,
  quantityIsByLocation: t.boolean
})

export const Ligne = t.type({
  uuid: t.string,
  designation: t.string,
  description: t.union([t.string, t.undefined]),
  prixUnitaireHT: t.number,
  quantite: t.number,
  unite : Unite,
  prixHT: t.number,
  tauxTVA: t.number,
  montantTVA: t.number,
  prixTTC: t.number
})

export const LigneMetiers = t.intersection([Ligne, t.type({ locationsDetails : LocationsDetails})]);

export const LignePiece = t.intersection([Ligne, t.type({label: t.string})])

export const Lot = t.type({
  label: t.string,
  lignes: t.array(t.union([LigneMetiers, LignePiece])),
  prixTotalHT: t.number,
  prixTotalTTC: t.number
})

export const Devis = t.strict({
  title: t.string,
  prixTotalHTAvantRemise: t.number,
  montantRemise: t.number,
  prixTotalHT: t.number,
  prixTotalTTC: t.number,
  lots: t.array(Lot)
})

export type Devis = t.TypeOf<typeof Devis>
