import { DevisPiece, DevisMetier, Location, Locations, LignePiece, LigneMetier, LocationDetail, LotPiece } from '../models/Devis';
import { useState, useEffect } from 'react';
import { get } from '../axios';

export function byLocation(devis: DevisMetier): DevisPiece {
  const lotsLocations = locations(devis.locations);
  const lotsPieces: Array<Locations> = devis.lots
    .flatMap(lot => lot.lignes)
    .flatMap(lignePiece)
    .reduce((accum, t) =>
      accum
        .map(l => {
          if(l.uuid === t.uuid) {
            l.lignes.push(t.ligne)
          }
          return l
        })
    , lotsLocations);
  
  const lots = countPrices(lotsPieces);
  const prixTotalHTAvantRemise = lots.map(lot => lot.prixTotalHT).reduce((l, r) => l + r, 0);
  const prixTotalHT = prixTotalHTAvantRemise - devis.montantRemise;
  return {
    title: devis.title,
    prixTotalHTAvantRemise,
    montantRemise: devis.montantRemise,
    prixTotalHT,
    prixTotalTTC: devis.prixTotalTTC,
    lots
  };
}

function countPrices(lotsPieces: Array<Locations>) : Array<LotPiece> {
  return lotsPieces.map(lot => {
    const prixTotalHT = lot.lignes.map(ligne => ligne.prixHT).reduce((l, r) => l + r, 0)
    const prixTotalTTC = lot.lignes.map(ligne => ligne.prixTTC).reduce((l, r) => l + r, 0)
    return {
      prixTotalHT,
      prixTotalTTC,
      uuid: lot.uuid,
      label: lot.label,
      lignes: lot.lignes
    }
  })
}

function lignePiece(ligne: LigneMetier): Array<{uuid: string, ligne : LignePiece}> {
  const { locations } = ligne.locationsDetails
  if(locations.length > 0) {
    return locations.map(l => {
      return {uuid : l.uuid, ligne :fromLocation(l, ligne)}
    });
  } else {
    return [{uuid: "default", ligne}];
  }
}

function fromLocation(location: LocationDetail, ligne : LigneMetier): LignePiece {
  const prixHT = location.quantite * ligne.prixUnitaireHT;
  const montantTVA = (ligne.tauxTVA * ligne.prixHT) / 100;
  const prixTTC = prixHT + montantTVA;
  return {
    uuid: ligne.uuid,
    designation: ligne.designation,
    description: ligne.description,
    prixUnitaireHT: ligne.prixUnitaireHT,
    quantite: location.quantite,
    unite: ligne.unite,
    prixHT,
    tauxTVA: ligne.tauxTVA,
    montantTVA,
    prixTTC,
  }
}

function locations(locations: Array<Location>): Array<Locations> {
  const DefaultLocation = {uuid: "default", label:"Autres prestations"}
  return locations.concat(DefaultLocation).map(l => {
    return {label: l.label, uuid: l.uuid, l, lignes: []}
  })
}

const URL = "https://api.travauxlib.com/api/devis-pro/JKusHl8Ba8MABIjdCtLZOe2lxxnUfX";
export enum TypeDevis {
  METIER,
  PIECE
}

export const useDevis = (): DevisMetier | null => {
  const [devis, setDevis] = useState<DevisMetier | null>(null);

  const fetchResources = async () => {
    const resources = await get(URL, DevisMetier);
    setDevis(resources);
  }

  useEffect(
    () => {
      fetchResources()
    },
    []
  );
  return devis;
}
