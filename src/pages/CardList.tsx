import React from 'react';
import { LotMetier, LotPiece, DevisMetier, DevisPiece } from '../models/Devis';
import { Collapse } from 'antd';
import CardItem from '../components/CardItem';

const CardList = (devis: DevisMetier | DevisPiece) => {

  return (
    <Collapse accordion>
      {
        (devis.lots as Array<LotMetier | LotPiece>).map(lot => CardItem(lot))
      }
    </Collapse>
  );
}

export default CardList;
