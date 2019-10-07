import React from 'react';
import { Collapse, Descriptions } from 'antd';
import { LotMetier, LigneMetier, LotPiece, LignePiece } from '../models/Devis';

const CardItem = (lot: LotMetier | LotPiece) => {
  const { Panel } = Collapse;
  return (
    <Panel key={lot.label} header={Header(lot)} >
        {(lot.lignes as Array<LigneMetier | LignePiece>).map(l => Item(l))}
    </Panel>
  )
}

const Header = (lot: LotMetier | LotPiece) => {
  return (
    <div>
      <div>{lot.label}</div>
      <div>{lot.prixTotalHT}</div>
      <div>{lot.prixTotalTTC}</div>
    </div>
  )
}

const Item = (ligne: LigneMetier | LignePiece)  => {
  return (
    <Descriptions key={ligne.uuid} title={ligne.designation} bordered>
      <Descriptions.Item label="Prix Unitaire">{ligne.prixUnitaireHT}</Descriptions.Item>
      <Descriptions.Item label="Quantite">{ligne.quantite}</Descriptions.Item>
      <Descriptions.Item label="Unite">{ligne.unite}</Descriptions.Item>
      <Descriptions.Item label="Prix HT">{ligne.prixHT}</Descriptions.Item>
      <Descriptions.Item label="Taux TVA">{ligne.tauxTVA}</Descriptions.Item>
      <Descriptions.Item label="Montant TVA">{ligne.montantTVA}</Descriptions.Item>
      <Descriptions.Item label="Prix TTC" span={3}>{ligne.prixTTC}</Descriptions.Item>
    </Descriptions>
  )
}

export default CardItem;
