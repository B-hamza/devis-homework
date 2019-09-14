import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { get } from '../axios';
import { Devis } from '../models/Devis';

const URL = "https://api.travauxlib.com/api/devis-pro/JKusHl8Ba8MABIjdCtLZOe2lxxnUfX";

const CardList = () => {
  const [resources, setResources] = useState<Devis | null>(null);

  const fetchResources = async () => {
    const resources = await get(URL, Devis);
    setResources(resources);
  }

  useEffect(
    () => {
      fetchResources()
    },
    []
  );

  return (
    <Div>
      {resources != null ? resources.title : ""}
    </Div>
  );
}

const Div = styled.div({

});

export default CardList;
