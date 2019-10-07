import * as t from 'io-ts';

export const Location = t.type({
  uuid: t.string,
  label: t.string
})

export type Location = t.TypeOf<typeof Location>

export const Unite = t.keyof({
  unitaire: null,
  m2: null,
  m: null
})

export const LocationDetail = t.type({
  uuid: t.string,
  quantite: t.number
})

export type LocationDetail = t.TypeOf<typeof LocationDetail>

export const LocationsDetails = t.type({
  locations: t.array(LocationDetail),
  additionalQuantity: t.number,
  quantityIsByLocation: t.boolean
})

const LigneInformation = t.type({
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

export const LigneMetier = t.intersection([LigneInformation, t.type({ locationsDetails : LocationsDetails})]);
export type LigneMetier = t.TypeOf<typeof LigneMetier>

export const LignePiece = LigneInformation
export type LignePiece = t.TypeOf<typeof LignePiece>

const Price = t.type({
  prixTotalHT: t.number,
  prixTotalTTC: t.number
})

export const LotMetier = t.intersection([Price, t.type({label: t.string, lignes : t.array(LigneMetier)})])
export type LotMetier = t.TypeOf<typeof LotMetier>

export const Locations = t.type({uuid: t.string, label: t.string, lignes: t.array(LignePiece)})
export type Locations = t.TypeOf<typeof Locations>

export const LotPiece = t.intersection([Price, Locations])
export type LotPiece = t.TypeOf<typeof LotPiece>

const DevisInformation = t.strict({
  title: t.string,
  prixTotalHTAvantRemise: t.number,
  montantRemise: t.number,
  prixTotalHT: t.number,
  prixTotalTTC: t.number
})

export const DevisMetier = t.intersection([DevisInformation, t.type({lots: t.array(LotMetier), locations: t.array(Location)})])

export const DevisPiece = t.intersection([DevisInformation, t.type({lots: t.array(LotPiece)})])

export type DevisMetier = t.TypeOf<typeof DevisMetier>

export type DevisPiece = t.TypeOf<typeof DevisPiece>
