
export const devisFixture = {
  "token": "JKusHl8Ba8MABIjdCtLZOe2lxxnUfX",
  "deal": {
    "isTravauxlib": false,
    "customerName": "Durand Jacques",
    "customerEmail": "exemple@exemple.com",
    "billingAddress": {
      "address": "10 rue de l'exemple",
      "postalCode": "90325",
      "city": "Exempledevisville"
    }
  },
  "company": {
    "name": "hemea",
    "email": "contact@hemea.com",
    "logoUrl": "https://travauxlib-espace-pro-prod.s3.amazonaws.com/logos/novare-construction-ANenM.png",
    "siret": "81377641600022",
    "formattedSiret": "813 776 416 00022",
    "siren": "813776416",
    "numeroTVA": "FR86813776416",
    "statutEntreprise": "SAS",
    "websites": {},
    "address": "176 Avenue Charles de Gaulle",
    "postalCode": "92200",
    "city": "Neuilly-sur-Seine",
    "phoneNumber": "01 82 28 56 00",
    "capital": 6515,
    "insurances": [
      {
        "file": "https://travauxlib-espace-pro-prod.s3.amazonaws.com/insurances/insurance-novare-construction-oWNdO.pdf",
        "label": "Décennale + RC pro"
      }
    ],
    "corpsEtat": [],
    "isRGE": false,
    "isQualibat": false,
    "isEcoArtisan": false,
    "isKycCompliant": false,
    "isArchitecte": false,
    "lemonWayWalletId": 13,
    "firstNameRepresentantLegal": "Matthieu",
    "lastNameRepresentantLegal": "Burin",
    "isAutoEntrepreneur": false
  },
  "title": "Exemple devis pour la rénovation complète de votre appartement",
  "introductionLetter": "Madame, Monsieur,\n\nVoici notre devis qui comporte l'intégralité des prestations de fournitures et main d'oeuvre.\n\nNous restons à votre disposition pour toute question ou modification du devis, et espérons que notre entreprise vous apportera entière satisfaction.\n\nNous vous prions d'agréer, Madame, Monsieur, nos sincères salutations.",
  "lots": [
    {
      "label": "Démolition - préparation",
      "lignes": [
        {
          "designation": "Protection des zones d'intervention",
          "description": "Mise en place de bâches de protection des zones d'intervention.",
          "prixUnitaireHT": 200,
          "quantite": 1,
          "unite": "unitaire",
          "prixHT": 200,
          "tauxTVA": 10,
          "montantTVA": 20,
          "prixTTC": 220,
          "locationsDetails": {
            "locations": [],
            "additionalQuantity": 0,
            "quantityIsByLocation": false
          },
          "uuid": "985b02ce-ed40-4be7-b4fb-b5f20c69dd9c"
        },
        {
          "designation": "Nettoyage à l'avancement et fin de chantier",
          "description": "Enlèvement des protections, nettoyage des sols, poussière et résidus.",
          "prixUnitaireHT": 200,
          "quantite": 1,
          "unite": "unitaire",
          "prixHT": 200,
          "tauxTVA": 10,
          "montantTVA": 20,
          "prixTTC": 220,
          "locationsDetails": {
            "locations": [],
            "additionalQuantity": 0,
            "quantityIsByLocation": false
          },
          "uuid": "a993005f-aa48-40a6-9b27-572db13c6552"
        },
        {
          "designation": "Dépose de carrelage au sol",
          "description": "Compris : évacuation et mise en décharge.",
          "normalizedIdentifier": "depose_sol_carrelage",
          "prixUnitaireHT": 20,
          "quantite": 6.8,
          "unite": "m2",
          "uniteLabel": "m²",
          "prixHT": 136,
          "tauxTVA": 10,
          "montantTVA": 13.6,
          "prixTTC": 149.6,
          "locationsDetails": {
            "locations": [
              {
                "uuid": "35c15ae1-4258-4a56-b61c-6bb6a2140e25",
                "quantite": 3.3
              },
              {
                "uuid": "c85c00a8-6316-4ed4-8c58-aa55127edc99",
                "quantite": 3.5
              }
            ],
            "additionalQuantity": 0,
            "quantityIsByLocation": true
          },
          "uuid": "9e29f080-3a69-49f6-895d-e0a2eba30b6b"
        },
        {
          "designation": "Dépose de cuisine",
          "prixUnitaireHT": 550,
          "quantite": 1,
          "unite": "unitaire",
          "prixHT": 550,
          "tauxTVA": 10,
          "montantTVA": 55,
          "prixTTC": 605,
          "locationsDetails": {
            "locations": [
              {
                "uuid": "c85c00a8-6316-4ed4-8c58-aa55127edc99",
                "quantite": 1
              }
            ],
            "additionalQuantity": 0,
            "quantityIsByLocation": true
          },
          "uuid": "a21d07b0-1da6-4f3d-bf4f-9349fa04b4d1"
        },
        {
          "designation": "Dépose de muret en platre",
          "prixUnitaireHT": 180,
          "quantite": 1,
          "unite": "unitaire",
          "prixHT": 180,
          "tauxTVA": 10,
          "montantTVA": 18,
          "prixTTC": 198,
          "locationsDetails": {
            "locations": [
              {
                "uuid": "c85c00a8-6316-4ed4-8c58-aa55127edc99",
                "quantite": 1
              }
            ],
            "additionalQuantity": 0,
            "quantityIsByLocation": true
          },
          "uuid": "24691af2-0a48-457f-8817-c77dda86882f"
        },
        {
          "designation": "Dépose de douche encastrée et de paroi",
          "description": "Compris : mise en décharge, bouchonnage des réseaux.",
          "normalizedIdentifier": "depose_douche",
          "prixUnitaireHT": 150,
          "quantite": 1,
          "unite": "unitaire",
          "prixHT": 150,
          "tauxTVA": 10,
          "montantTVA": 15,
          "prixTTC": 165,
          "locationsDetails": {
            "locations": [
              {
                "uuid": "35c15ae1-4258-4a56-b61c-6bb6a2140e25",
                "quantite": 1
              }
            ],
            "additionalQuantity": 0,
            "quantityIsByLocation": true
          },
          "uuid": "5d50825c-16ef-4094-8a06-a5fa160c0b14"
        },
        {
          "designation": "Dépose de bloc WC",
          "description": "Compris : évacuation et mise en décharge, bouchonnage des réseaux.",
          "normalizedIdentifier": "depose_wc_classique",
          "prixUnitaireHT": 60,
          "quantite": 1,
          "unite": "unitaire",
          "prixHT": 60,
          "tauxTVA": 10,
          "montantTVA": 6,
          "prixTTC": 66,
          "locationsDetails": {
            "locations": [
              {
                "uuid": "35c15ae1-4258-4a56-b61c-6bb6a2140e25",
                "quantite": 1
              }
            ],
            "additionalQuantity": 0,
            "quantityIsByLocation": true
          },
          "uuid": "7f935202-5a74-4c15-97c0-f3f38c2f9c40"
        },
        {
          "designation": "Dépose de meuble vasque de salle de bain",
          "description": "Compris : évacuation et mise en décharge, bouchonnage des réseaux.",
          "normalizedIdentifier": "depose_meuble_sdb",
          "prixUnitaireHT": 40,
          "quantite": 1,
          "unite": "unitaire",
          "prixHT": 40,
          "tauxTVA": 10,
          "montantTVA": 4,
          "prixTTC": 44,
          "locationsDetails": {
            "locations": [
              {
                "uuid": "35c15ae1-4258-4a56-b61c-6bb6a2140e25",
                "quantite": 1
              }
            ],
            "additionalQuantity": 0,
            "quantityIsByLocation": true
          },
          "uuid": "4c23717e-8f56-4cc8-8780-e6b03bf5fd50"
        },
        {
          "designation": "Dépose de sèche-serviette",
          "description": "Compris : évacuation et mise en décharge.",
          "normalizedIdentifier": "depose_seche_serviette",
          "prixUnitaireHT": 45,
          "quantite": 1,
          "unite": "unitaire",
          "prixHT": 45,
          "tauxTVA": 10,
          "montantTVA": 4.5,
          "prixTTC": 49.5,
          "locationsDetails": {
            "locations": [
              {
                "uuid": "35c15ae1-4258-4a56-b61c-6bb6a2140e25",
                "quantite": 1
              }
            ],
            "additionalQuantity": 0,
            "quantityIsByLocation": true
          },
          "uuid": "c7b7af52-8031-401f-b7be-8bc4f6df8094"
        },
        {
          "designation": "Dépose de carrelage mural",
          "description": "Dépose et évacuation du revêtement existant (faïence/pâte de verre). Rebouchage et mastiquage des irrégularités. Passage d'un enduit de lissage.",
          "normalizedIdentifier": "depose_mur_carrelage",
          "prixUnitaireHT": 25,
          "quantite": 17,
          "unite": "m2",
          "uniteLabel": "m²",
          "prixHT": 425,
          "tauxTVA": 10,
          "montantTVA": 42.5,
          "prixTTC": 467.5,
          "locationsDetails": {
            "locations": [
              {
                "uuid": "35c15ae1-4258-4a56-b61c-6bb6a2140e25",
                "quantite": 17
              }
            ],
            "additionalQuantity": 0,
            "quantityIsByLocation": true
          },
          "uuid": "9bdec429-5ef0-4ede-8f6c-16046bc4d2d7"
        },
        {
          "designation": "Dépose de ballon d'eau chaude",
          "description": "Compris : évacuation et mise en décharge, bouchonnage des réseaux.",
          "prixUnitaireHT": 120,
          "quantite": 1,
          "unite": "unitaire",
          "prixHT": 120,
          "tauxTVA": 10,
          "montantTVA": 12,
          "prixTTC": 132,
          "locationsDetails": {
            "locations": [
              {
                "uuid": "c85c00a8-6316-4ed4-8c58-aa55127edc99",
                "quantite": 1
              }
            ],
            "additionalQuantity": 0,
            "quantityIsByLocation": true
          },
          "uuid": "3d508e8d-188c-471e-8ef9-1f9e4ed27a8b"
        }
      ],
      "prixTotalHT": 2106,
      "prixTotalTTC": 2316.6
    },
    {
      "label": "Serrurerie - métallerie",
      "lignes": [
        {
          "designation": "Remplacement de serrure sur porte blindée",
          "description": "Compris : 2 jeux de clés.",
          "prixUnitaireHT": 385,
          "prixPublicFournitureHT": 200,
          "quantite": 1,
          "unite": "unitaire",
          "prixHT": 385,
          "tauxTVA": 10,
          "montantTVA": 38.5,
          "prixTTC": 423.5,
          "locationsDetails": {
            "locations": [
              {
                "uuid": "8ebec007-b267-481e-88b3-7d2f2f3df1b7",
                "quantite": 1
              }
            ],
            "additionalQuantity": 0,
            "quantityIsByLocation": true
          },
          "uuid": "2634086e-5cff-41d5-8e36-6a742f10487c"
        },
        {
          "designation": "Fourniture et pose de poignée de porte avec clé",
          "description": "Porte de la salle d'eau.",
          "prixUnitaireHT": 70,
          "prixPublicFournitureHT": 30,
          "quantite": 1,
          "unite": "unitaire",
          "prixHT": 70,
          "tauxTVA": 10,
          "montantTVA": 7,
          "prixTTC": 77,
          "locationsDetails": {
            "locations": [
              {
                "uuid": "35c15ae1-4258-4a56-b61c-6bb6a2140e25",
                "quantite": 1
              }
            ],
            "additionalQuantity": 0,
            "quantityIsByLocation": true
          },
          "uuid": "50ad2aa8-1d02-4df9-817f-2dc4ad06ad7e"
        }
      ],
      "prixTotalHT": 455,
      "prixTotalTTC": 500.5
    },
    {
      "label": "Plâtrerie - cloisonnement",
      "lignes": [
        {
          "designation": "Fourniture et pose de cloison de distribution (cloison séparative)",
          "description": "Cloison en carreaux de platre 88x255 cm côté gauche, en placo côté droite/porte verrière.",
          "prixUnitaireHT": 350,
          "quantite": 1,
          "unite": "unitaire",
          "prixHT": 350,
          "tauxTVA": 10,
          "montantTVA": 35,
          "prixTTC": 385,
          "locationsDetails": {
            "locations": [
              {
                "uuid": "a0947d3d-99b3-4a58-a58d-8b0fd4bd6f40",
                "quantite": 1
              }
            ],
            "additionalQuantity": 0,
            "quantityIsByLocation": true
          },
          "uuid": "9ab94cef-6866-4de5-a93f-95e0d2710f98"
        }
      ],
      "prixTotalHT": 350,
      "prixTotalTTC": 385
    },
    {
      "label": "Plomberie - chauffage",
      "lignes": [
        {
          "designation": "Création d'un réseau d'alimentation eau chaude / eau froide depuis l'arrivée existante",
          "description": "Réseau en cuivre de 14 mm. Compris : pose de vannes d'arrêt 1/4 de tour.\nRaccordement du ballon d'eau chaude, des WC suspendus, meuble vasque, douche, évier cuisine compris.",
          "prixUnitaireHT": 250,
          "quantite": 5,
          "unite": "unitaire",
          "prixHT": 1250,
          "tauxTVA": 10,
          "montantTVA": 125,
          "prixTTC": 1375,
          "locationsDetails": {
            "locations": [
              {
                "uuid": "35c15ae1-4258-4a56-b61c-6bb6a2140e25",
                "quantite": 3
              },
              {
                "uuid": "c85c00a8-6316-4ed4-8c58-aa55127edc99",
                "quantite": 2
              }
            ],
            "additionalQuantity": 0,
            "quantityIsByLocation": true
          },
          "uuid": "1896ba47-0c95-4fab-9ad8-daf0e472349c"
        },
        {
          "designation": "Fourniture et pose d'évacuation",
          "prixUnitaireHT": 250,
          "quantite": 3,
          "unite": "unitaire",
          "prixHT": 750,
          "tauxTVA": 10,
          "montantTVA": 75,
          "prixTTC": 825,
          "locationsDetails": {
            "locations": [
              {
                "uuid": "35c15ae1-4258-4a56-b61c-6bb6a2140e25",
                "quantite": 3
              },
              {
                "uuid": "c85c00a8-6316-4ed4-8c58-aa55127edc99",
                "quantite": 0
              }
            ],
            "additionalQuantity": 0,
            "quantityIsByLocation": true
          },
          "uuid": "5d1cbfd3-ef1a-43f6-be49-13b24ad71bb4"
        },
        {
          "designation": "Création d'attente eau froide + évacuation pour machine à laver",
          "description": "Fourniture et pose d'un robinet d'arrivée d'eau et d'un siphon de vidange.",
          "normalizedIdentifier": "attentes_machine_a_laver",
          "prixUnitaireHT": 250,
          "quantite": 1,
          "unite": "unitaire",
          "prixHT": 250,
          "tauxTVA": 10,
          "montantTVA": 25,
          "prixTTC": 275,
          "locationsDetails": {
            "locations": [],
            "additionalQuantity": 0,
            "quantityIsByLocation": false
          },
          "uuid": "0b79b5a5-7ab5-47d2-a58c-424d23e4a99e"
        },
        {
          "designation": "Fourniture et pose de ballon d'eau chaude extra-plat 65L",
          "prixUnitaireHT": 650,
          "prixPublicFournitureHT": 400,
          "quantite": 1,
          "unite": "unitaire",
          "prixHT": 650,
          "tauxTVA": 10,
          "montantTVA": 65,
          "prixTTC": 715,
          "locationsDetails": {
            "locations": [
              {
                "uuid": "35c15ae1-4258-4a56-b61c-6bb6a2140e25",
                "quantite": 1
              }
            ],
            "additionalQuantity": 0,
            "quantityIsByLocation": true
          },
          "uuid": "2f667a35-a65e-4822-8f58-40d930793360"
        },
        {
          "designation": "Fourniture et pose de receveur de douche à carreler de marque WEDI",
          "description": "",
          "prixUnitaireHT": 700,
          "prixPublicFournitureHT": 350,
          "quantite": 1,
          "unite": "unitaire",
          "prixHT": 700,
          "tauxTVA": 10,
          "montantTVA": 70,
          "prixTTC": 770,
          "locationsDetails": {
            "locations": [
              {
                "uuid": "35c15ae1-4258-4a56-b61c-6bb6a2140e25",
                "quantite": 1
              }
            ],
            "additionalQuantity": 0,
            "quantityIsByLocation": true
          },
          "uuid": "c71d0784-a692-4b8f-87e9-6ad0c27c3524"
        },
        {
          "designation": "Fourniture et pose de colonne de douche avec mitigeur",
          "description": "Installation comprenant mitigeur, rampe, pomme et douchette.",
          "normalizedIdentifier": "colonne_douche",
          "prixUnitaireHT": 450,
          "prixPublicFournitureHT": 300,
          "quantite": 1,
          "unite": "unitaire",
          "prixHT": 450,
          "tauxTVA": 10,
          "montantTVA": 45,
          "prixTTC": 495,
          "locationsDetails": {
            "locations": [
              {
                "uuid": "35c15ae1-4258-4a56-b61c-6bb6a2140e25",
                "quantite": 1
              }
            ],
            "additionalQuantity": 0,
            "quantityIsByLocation": true
          },
          "uuid": "c833aae2-ab76-4d06-a077-bc5fcadf77d2"
        },
        {
          "designation": "Fourniture et pose de paroi de douche en verre securit 6 mm",
          "normalizedIdentifier": "paroi_de_douche",
          "prixUnitaireHT": 500,
          "prixPublicFournitureHT": 350,
          "quantite": 1,
          "unite": "unitaire",
          "prixHT": 500,
          "tauxTVA": 10,
          "montantTVA": 50,
          "prixTTC": 550,
          "locationsDetails": {
            "locations": [
              {
                "uuid": "35c15ae1-4258-4a56-b61c-6bb6a2140e25",
                "quantite": 1
              }
            ],
            "additionalQuantity": 0,
            "quantityIsByLocation": true
          },
          "uuid": "7da8c58b-d696-4738-aafe-ff75dc6ebd30"
        },
        {
          "designation": "Fourniture et pose de meuble de salle de bain simple vasque",
          "description": "Compris : miroir et spot LED de chaque côté du miroir.\nhttps://www.ikea.com/fr/fr/catalog/products/S19246950/\nhttps://www.ikea.com/fr/fr/catalog/products/70217671/",
          "normalizedIdentifier": "meuble_sdb_simple_vasque",
          "prixUnitaireHT": 630,
          "prixPublicFournitureHT": 480,
          "quantite": 1,
          "unite": "unitaire",
          "prixHT": 630,
          "tauxTVA": 10,
          "montantTVA": 63,
          "prixTTC": 693,
          "locationsDetails": {
            "locations": [
              {
                "uuid": "35c15ae1-4258-4a56-b61c-6bb6a2140e25",
                "quantite": 1
              }
            ],
            "additionalQuantity": 0,
            "quantityIsByLocation": true
          },
          "uuid": "a7366784-2bc8-438d-be01-64ffa3ff8f5b"
        },
        {
          "designation": "Fourniture et pose de cuvette WC suspendue + réservoir encastré",
          "description": "Cuvette WC suspendue avec abattant sur bâti support et réservoir encastré à commande mécanique par plaque murale, compris mise en place du bâti et cuvette, coffrage.",
          "normalizedIdentifier": "wc_suspendu",
          "prixUnitaireHT": 950,
          "prixPublicFournitureHT": 650,
          "quantite": 1,
          "unite": "unitaire",
          "prixHT": 950,
          "tauxTVA": 10,
          "montantTVA": 95,
          "prixTTC": 1045,
          "locationsDetails": {
            "locations": [
              {
                "uuid": "35c15ae1-4258-4a56-b61c-6bb6a2140e25",
                "quantite": 1
              }
            ],
            "additionalQuantity": 0,
            "quantityIsByLocation": true
          },
          "uuid": "5bf76a95-40f0-4a76-b7fb-9a6ebadbbcee"
        },
        {
          "designation": "Fourniture et pose de sèche-serviette électrique",
          "prixUnitaireHT": 350,
          "prixPublicFournitureHT": 250,
          "quantite": 1,
          "unite": "unitaire",
          "prixHT": 350,
          "tauxTVA": 10,
          "montantTVA": 35,
          "prixTTC": 385,
          "locationsDetails": {
            "locations": [
              {
                "uuid": "35c15ae1-4258-4a56-b61c-6bb6a2140e25",
                "quantite": 1
              }
            ],
            "additionalQuantity": 0,
            "quantityIsByLocation": true
          },
          "uuid": "c82b497a-3db5-489e-9584-8b0687b823c4"
        },
        {
          "designation": "Fourniture et pose de radiateur électrique à intertie fluide 1500 W",
          "prixUnitaireHT": 550,
          "prixPublicFournitureHT": 400,
          "quantite": 2,
          "unite": "unitaire",
          "prixHT": 1100,
          "tauxTVA": 10,
          "montantTVA": 110,
          "prixTTC": 1210,
          "locationsDetails": {
            "locations": [
              {
                "uuid": "8ebec007-b267-481e-88b3-7d2f2f3df1b7",
                "quantite": 1
              },
              {
                "uuid": "a0947d3d-99b3-4a58-a58d-8b0fd4bd6f40",
                "quantite": 1
              }
            ],
            "additionalQuantity": 0,
            "quantityIsByLocation": true
          },
          "uuid": "043e1a92-fdbc-468b-acd3-0cf268c539e1"
        }
      ],
      "prixTotalHT": 7580,
      "prixTotalTTC": 8338
    },
    {
      "label": "Électricité",
      "lignes": [
        {
          "designation": "Fourniture et pose de tableau électrique 2 rangées",
          "prixUnitaireHT": 850,
          "quantite": 1,
          "unite": "unitaire",
          "prixHT": 850,
          "tauxTVA": 10,
          "montantTVA": 85,
          "prixTTC": 935,
          "locationsDetails": {
            "locations": [
              {
                "uuid": "8ebec007-b267-481e-88b3-7d2f2f3df1b7",
                "quantite": 1
              }
            ],
            "additionalQuantity": 0,
            "quantityIsByLocation": true
          },
          "uuid": "88b500aa-52ea-4dcf-bacd-6e8c376ee319"
        },
        {
          "designation": "Rénovation complète du réseau électrique, en encastré (saignées dans les murs)",
          "description": "Compris :\nPrises 16A, 20A, 32A.\nInterrupteurs simples et va-et-vient.\nPlafonniers dans la salle de bain et dans la cuisine.",
          "prixUnitaireHT": 105,
          "quantite": 36,
          "unite": "m2",
          "uniteLabel": "m²",
          "prixHT": 3780,
          "tauxTVA": 10,
          "montantTVA": 378,
          "prixTTC": 4158,
          "locationsDetails": {
            "locations": [],
            "additionalQuantity": 0,
            "quantityIsByLocation": false
          },
          "uuid": "db800acb-9ba6-4611-9351-aaf34f98996e"
        }
      ],
      "prixTotalHT": 4630,
      "prixTotalTTC": 5093
    },
    {
      "label": "Revêtements de sols et muraux",
      "lignes": [
        {
          "designation": "Ragréage du sol afin de préparer un sol lisse",
          "normalizedIdentifier": "ragreage_sol",
          "prixUnitaireHT": 25,
          "quantite": 6.8,
          "unite": "m2",
          "uniteLabel": "m²",
          "prixHT": 170,
          "tauxTVA": 10,
          "montantTVA": 17,
          "prixTTC": 187,
          "locationsDetails": {
            "locations": [
              {
                "uuid": "35c15ae1-4258-4a56-b61c-6bb6a2140e25",
                "quantite": 3.3
              },
              {
                "uuid": "c85c00a8-6316-4ed4-8c58-aa55127edc99",
                "quantite": 3.5
              }
            ],
            "additionalQuantity": 0,
            "quantityIsByLocation": true
          },
          "uuid": "1c92dd6c-a9a4-497b-a952-8ed7da32719c"
        },
        {
          "designation": "Ponçage et vitrification de parquet",
          "description": "Ponçage (on élimine les défauts superficiels du parquet), aspiration/souffle afin d'éviter les émissions de poussière et l'apparition de défauts sur le parquet, application de deux couches de vitrification.\nSous réserve que le parquet en mauvais état soit rattrapable.",
          "prixUnitaireHT": 49,
          "quantite": 28.4,
          "unite": "m2",
          "uniteLabel": "m²",
          "prixHT": 1391.6,
          "tauxTVA": 10,
          "montantTVA": 139.16,
          "prixTTC": 1530.76,
          "locationsDetails": {
            "locations": [
              {
                "uuid": "8ebec007-b267-481e-88b3-7d2f2f3df1b7",
                "quantite": 18.4
              },
              {
                "uuid": "a0947d3d-99b3-4a58-a58d-8b0fd4bd6f40",
                "quantite": 10
              }
            ],
            "additionalQuantity": 0,
            "quantityIsByLocation": true
          },
          "uuid": "3b309b29-62cd-4fa3-b4e0-1d0512115c18"
        },
        {
          "designation": "Fourniture et pose de carrelage au sol",
          "normalizedIdentifier": "carrelage_sol",
          "prixUnitaireHT": 105,
          "prixPublicFournitureHT": 30,
          "quantite": 6.8,
          "unite": "m2",
          "uniteLabel": "m²",
          "prixHT": 714,
          "tauxTVA": 10,
          "montantTVA": 71.4,
          "prixTTC": 785.4,
          "locationsDetails": {
            "locations": [
              {
                "uuid": "35c15ae1-4258-4a56-b61c-6bb6a2140e25",
                "quantite": 3.3
              },
              {
                "uuid": "c85c00a8-6316-4ed4-8c58-aa55127edc99",
                "quantite": 3.5
              }
            ],
            "additionalQuantity": 0,
            "quantityIsByLocation": true
          },
          "uuid": "e05d2344-0e7b-439e-9952-4e97f41d2719"
        },
        {
          "designation": "Fourniture et pose de plinthes de carrelage",
          "normalizedIdentifier": "plinthes_carrelage",
          "prixUnitaireHT": 20,
          "prixPublicFournitureHT": 11,
          "quantite": 3.2,
          "unite": "m",
          "uniteLabel": "m",
          "prixHT": 64,
          "tauxTVA": 10,
          "montantTVA": 6.4,
          "prixTTC": 70.4,
          "locationsDetails": {
            "locations": [
              {
                "uuid": "c85c00a8-6316-4ed4-8c58-aa55127edc99",
                "quantite": 3.2
              }
            ],
            "additionalQuantity": 0,
            "quantityIsByLocation": true
          },
          "uuid": "584bd8da-ebf3-410f-be4d-a408ee10b528"
        },
        {
          "designation": "Fourniture et pose de carrelage mural",
          "description": "Fourniture et pose de carreaux en grès, compris joints au mortier industriel.\nSur toute la hauteur des murs dans la salle de bain.",
          "prixUnitaireHT": 100,
          "prixPublicFournitureHT": 30,
          "quantite": 19,
          "unite": "m2",
          "uniteLabel": "m²",
          "prixHT": 1900,
          "tauxTVA": 10,
          "montantTVA": 190,
          "prixTTC": 2090,
          "locationsDetails": {
            "locations": [
              {
                "uuid": "35c15ae1-4258-4a56-b61c-6bb6a2140e25",
                "quantite": 17
              },
              {
                "uuid": "c85c00a8-6316-4ed4-8c58-aa55127edc99",
                "quantite": 2
              }
            ],
            "additionalQuantity": 0,
            "quantityIsByLocation": true
          },
          "uuid": "282c1565-8d48-4a02-aae3-97e74e9abd87"
        }
      ],
      "prixTotalHT": 4239.6,
      "prixTotalTTC": 4663.56
    },
    {
      "label": "Menuiseries intérieures",
      "lignes": [
        {
          "designation": "Fourniture et pose de tringles à rideaux",
          "prixUnitaireHT": 65,
          "prixPublicFournitureHT": 40,
          "quantite": 4,
          "unite": "unitaire",
          "prixHT": 260,
          "tauxTVA": 10,
          "montantTVA": 26,
          "prixTTC": 286,
          "locationsDetails": {
            "locations": [
              {
                "uuid": "a0947d3d-99b3-4a58-a58d-8b0fd4bd6f40",
                "quantite": 2
              },
              {
                "uuid": "8ebec007-b267-481e-88b3-7d2f2f3df1b7",
                "quantite": 2
              }
            ],
            "additionalQuantity": 0,
            "quantityIsByLocation": true
          },
          "uuid": "45d0135f-732c-4918-9a63-2408b8ce2657"
        },
        {
          "designation": "Fourniture et pose d'étagère en medium à peindre sur-mesure 120x27 cm",
          "description": "Compris : porte coulissante.",
          "prixUnitaireHT": 550,
          "quantite": 1,
          "unite": "unitaire",
          "prixHT": 550,
          "tauxTVA": 10,
          "montantTVA": 55,
          "prixTTC": 605,
          "locationsDetails": {
            "locations": [
              {
                "uuid": "a0947d3d-99b3-4a58-a58d-8b0fd4bd6f40",
                "quantite": 1
              }
            ],
            "additionalQuantity": 0,
            "quantityIsByLocation": true
          },
          "uuid": "f6e36c08-246f-4b54-8845-69781fcadac3"
        },
        {
          "designation": "Coffrage du tableau électrique en medium à peindre",
          "prixUnitaireHT": 250,
          "quantite": 1,
          "unite": "unitaire",
          "prixHT": 250,
          "tauxTVA": 10,
          "montantTVA": 25,
          "prixTTC": 275,
          "locationsDetails": {
            "locations": [
              {
                "uuid": "8ebec007-b267-481e-88b3-7d2f2f3df1b7",
                "quantite": 1
              }
            ],
            "additionalQuantity": 0,
            "quantityIsByLocation": true
          },
          "uuid": "af1b09a0-f8fa-4c11-831c-a31a8a010d92"
        },
        {
          "designation": "Fourniture et pose de dressing sur-mesure",
          "prixUnitaireHT": 140,
          "prixPublicFournitureHT": 90,
          "quantite": 1,
          "unite": "unitaire",
          "prixHT": 140,
          "tauxTVA": 10,
          "montantTVA": 14,
          "prixTTC": 154,
          "locationsDetails": {
            "locations": [
              {
                "uuid": "a0947d3d-99b3-4a58-a58d-8b0fd4bd6f40",
                "quantite": 1
              }
            ],
            "additionalQuantity": 0,
            "quantityIsByLocation": true
          },
          "uuid": "d6316a5a-7ac9-4c7b-9623-e7c66e3d54ff"
        },
        {
          "designation": "Fourniture et pose de bloc porte type verrière atelier Leroy Merlin 204x83 cm Emma ARTENS",
          "description": "https://www.leroymerlin.fr/v3/p/produits/bloc-porte-avec-bati-ajustable-medium-emma-artens-h-204xl-83cm-poussant-droit-e1501119104\n\nDimension totale du vitrage : L.728 H.1740 cm.\nDimension du sous bassement (partie non vitrée) : L.650 H.136 cm\nLe vitrage est composé de 2 carreaux L. 120 H.250 cm, 1 carreau L.120 H.1240 cm, 1 carreau L. 608 H. 1240 cm, 2 carreaux L. 608 H. 250 cm.\n\nModèle de la porte Vitrée\nType de vitrage (monté en usine) Verre trempé\nOuverture de la porte Poussant droit\nMatière principale Aluminium\nGarantie (en année) 5",
          "prixUnitaireHT": 550,
          "prixPublicFournitureHT": 250,
          "quantite": 1,
          "unite": "unitaire",
          "prixHT": 550,
          "tauxTVA": 10,
          "montantTVA": 55,
          "prixTTC": 605,
          "locationsDetails": {
            "locations": [
              {
                "uuid": "a0947d3d-99b3-4a58-a58d-8b0fd4bd6f40",
                "quantite": 1
              }
            ],
            "additionalQuantity": 0,
            "quantityIsByLocation": true
          },
          "uuid": "36a24903-97de-457c-8af3-01bb1ac36ee3"
        },
        {
          "designation": "Fourniture et pose d'étagères pour l'alcove du salon",
          "prixUnitaireHT": 350,
          "quantite": 1,
          "unite": "unitaire",
          "prixHT": 350,
          "tauxTVA": 10,
          "montantTVA": 35,
          "prixTTC": 385,
          "locationsDetails": {
            "locations": [
              {
                "uuid": "8ebec007-b267-481e-88b3-7d2f2f3df1b7",
                "quantite": 1
              }
            ],
            "additionalQuantity": 0,
            "quantityIsByLocation": true
          },
          "uuid": "04164678-2425-4ebb-9d51-cff538172536"
        }
      ],
      "prixTotalHT": 2100,
      "prixTotalTTC": 2310
    },
    {
      "label": "Peinture",
      "lignes": [
        {
          "designation": "Préparation légère des murs",
          "description": "Reprises d'enduit suite aux saignées pour l'électricité, ponçage, lessivage.\nPrestation adaptée à des murs propres et parfaitement lisses.\nIl est recommandé de mettre une toile à enduire (en supplément) si les murs sont fissurés afin que ces fissures ne réapparaissent pas.",
          "normalizedIdentifier": "preparation_murs_legere",
          "prixUnitaireHT": 10,
          "quantite": 104.6,
          "unite": "m2",
          "uniteLabel": "m²",
          "prixHT": 1046,
          "tauxTVA": 10,
          "montantTVA": 104.6,
          "prixTTC": 1150.6,
          "locationsDetails": {
            "locations": [
              {
                "uuid": "c85c00a8-6316-4ed4-8c58-aa55127edc99",
                "quantite": 20.99
              },
              {
                "uuid": "8ebec007-b267-481e-88b3-7d2f2f3df1b7",
                "quantite": 48.13
              },
              {
                "uuid": "a0947d3d-99b3-4a58-a58d-8b0fd4bd6f40",
                "quantite": 35.48
              }
            ],
            "additionalQuantity": 0,
            "quantityIsByLocation": true
          },
          "uuid": "2fe09d98-316b-43cc-91fe-4efa936e808e"
        },
        {
          "designation": "Peinture murale satinée sur fond préparé",
          "description": "Couche d'impression puis 2 couches de peinture satinée, hydrofuge pour les pièces humides.\nLa peinture satinée renvoie la lumière et est facilement lessivable mais nécessite une bonne préparation du support au risque de faire apparaitre les défauts du mur.",
          "normalizedIdentifier": "peinture_murale",
          "prixUnitaireHT": 20,
          "quantite": 104.6,
          "unite": "m2",
          "uniteLabel": "m²",
          "prixHT": 2092,
          "tauxTVA": 10,
          "montantTVA": 209.2,
          "prixTTC": 2301.2,
          "locationsDetails": {
            "locations": [
              {
                "uuid": "c85c00a8-6316-4ed4-8c58-aa55127edc99",
                "quantite": 20.99
              },
              {
                "uuid": "8ebec007-b267-481e-88b3-7d2f2f3df1b7",
                "quantite": 48.13
              },
              {
                "uuid": "a0947d3d-99b3-4a58-a58d-8b0fd4bd6f40",
                "quantite": 35.48
              }
            ],
            "additionalQuantity": 0,
            "quantityIsByLocation": true
          },
          "uuid": "10053b28-207a-4cbd-897b-ca1118cfeec1"
        },
        {
          "designation": "Préparation légère des plafonds",
          "description": "Reprises d'enduit suite aux saignées pour l'électricité, ponçage, lessivage.\nPrestation adaptée à des murs propres et parfaitement lisses.\nIl est recommandé de mettre une toile à enduire (en supplément) si les murs sont fissurés afin que ces fissures ne réapparaissent pas.",
          "normalizedIdentifier": "preparation_plafonds_legere",
          "prixUnitaireHT": 10,
          "quantite": 35.2,
          "unite": "m2",
          "uniteLabel": "m²",
          "prixHT": 352,
          "tauxTVA": 10,
          "montantTVA": 35.2,
          "prixTTC": 387.2,
          "locationsDetails": {
            "locations": [
              {
                "uuid": "35c15ae1-4258-4a56-b61c-6bb6a2140e25",
                "quantite": 3.3
              },
              {
                "uuid": "c85c00a8-6316-4ed4-8c58-aa55127edc99",
                "quantite": 3.5
              },
              {
                "uuid": "8ebec007-b267-481e-88b3-7d2f2f3df1b7",
                "quantite": 18.4
              },
              {
                "uuid": "a0947d3d-99b3-4a58-a58d-8b0fd4bd6f40",
                "quantite": 10
              }
            ],
            "additionalQuantity": 0,
            "quantityIsByLocation": true
          },
          "uuid": "cd156637-cdad-4e85-ae89-1c6787a06143"
        },
        {
          "designation": "Peinture plafonds mate sur fond préparé",
          "description": "Couche d'impression puis 2 couches de peinture mate, hydrofuge pour les pièces humides.\nLa peinture mate ne renvoie pas la lumière et masque donc les défauts du support, par contre elle est difficilement lessivable, elle est donc recommandée pour les plafonds.",
          "normalizedIdentifier": "peinture_plafonds",
          "prixUnitaireHT": 22,
          "quantite": 35.2,
          "unite": "m2",
          "uniteLabel": "m²",
          "prixHT": 774.4,
          "tauxTVA": 10,
          "montantTVA": 77.44,
          "prixTTC": 851.84,
          "locationsDetails": {
            "locations": [
              {
                "uuid": "35c15ae1-4258-4a56-b61c-6bb6a2140e25",
                "quantite": 3.3
              },
              {
                "uuid": "c85c00a8-6316-4ed4-8c58-aa55127edc99",
                "quantite": 3.5
              },
              {
                "uuid": "8ebec007-b267-481e-88b3-7d2f2f3df1b7",
                "quantite": 18.4
              },
              {
                "uuid": "a0947d3d-99b3-4a58-a58d-8b0fd4bd6f40",
                "quantite": 10
              }
            ],
            "additionalQuantity": 0,
            "quantityIsByLocation": true
          },
          "uuid": "6e9cd472-ffc4-40fc-8663-3193cc5390ef"
        },
        {
          "designation": "Peinture de garde-corps de fenêtre",
          "description": "Ponçage, couche d'antirouille, peinture 2 couches.",
          "prixUnitaireHT": 50,
          "quantite": 4,
          "unite": "unitaire",
          "prixHT": 200,
          "tauxTVA": 10,
          "montantTVA": 20,
          "prixTTC": 220,
          "locationsDetails": {
            "locations": [
              {
                "uuid": "a0947d3d-99b3-4a58-a58d-8b0fd4bd6f40",
                "quantite": 2
              },
              {
                "uuid": "8ebec007-b267-481e-88b3-7d2f2f3df1b7",
                "quantite": 2
              }
            ],
            "additionalQuantity": 0,
            "quantityIsByLocation": true
          },
          "uuid": "b02e6428-b012-49ac-982c-64eee9e3f138"
        }
      ],
      "prixTotalHT": 4464.4,
      "prixTotalTTC": 4910.84
    },
    {
      "label": "Cuisine",
      "lignes": [
        {
          "designation": "Fourniture et pose de cuisine IKEA",
          "description": "CF. document joint.\nCompris :\nMeubles haut et bas\nCloison montante de 110 cm\nÉvier\nPlaques de cuisson\nMitigeur\nFour\nRéfrigérateur",
          "prixUnitaireHT": 4700,
          "prixPublicFournitureHT": 2800,
          "quantite": 1,
          "unite": "unitaire",
          "prixHT": 4700,
          "tauxTVA": 10,
          "montantTVA": 470,
          "prixTTC": 5170,
          "locationsDetails": {
            "locations": [
              {
                "uuid": "c85c00a8-6316-4ed4-8c58-aa55127edc99",
                "quantite": 1
              }
            ],
            "additionalQuantity": 0,
            "quantityIsByLocation": true
          },
          "uuid": "bd2f72ef-4777-410f-906d-30a4a62a0e03"
        }
      ],
      "prixTotalHT": 4700,
      "prixTotalTTC": 5170
    }
  ],
  "prixTotalHTAvantRemise": 30625,
  "remise": {
    "typeRemise": "empty"
  },
  "montantRemise": 0,
  "prixTotalHT": 30625,
  "prixTotalTTC": 33687.5,
  "prixTotalFreeTTC": 0,
  "prixTotalFournitureHT": 7919.2,
  "montantsTVA": [
    {
      "taux": 10,
      "base": 30625,
      "montant": 3062.5
    }
  ],
  "attachments": [],
  "date": "2019-10-05",
  "dureeValidite": "1 mois",
  "modalitesPaiement": [
    {
      "pourcentage": 40,
      "label": "Acompte à la signature",
      "montant": 13475
    },
    {
      "pourcentage": 25,
      "label": "Versement intermédiaire",
      "montant": 8421.88
    },
    {
      "pourcentage": 20,
      "label": "Versement intermédiaire",
      "montant": 6737.5
    },
    {
      "pourcentage": 15,
      "label": "À la fin des travaux",
      "montant": 5053.12
    }
  ],
  "signe": false,
  "isTS": false,
  "isFinal": false,
  "locations": [
    {
      "uuid": "35c15ae1-4258-4a56-b61c-6bb6a2140e25",
      "label": "Salle d'eau",
      "surface": 3.3,
      "typeLocation": "Autre"
    },
    {
      "uuid": "c85c00a8-6316-4ed4-8c58-aa55127edc99",
      "label": "Cuisine",
      "surface": 3.5,
      "typeLocation": "Autre"
    },
    {
      "uuid": "8ebec007-b267-481e-88b3-7d2f2f3df1b7",
      "label": "Salon",
      "surface": 18.4,
      "typeLocation": "Autre"
    },
    {
      "uuid": "a0947d3d-99b3-4a58-a58d-8b0fd4bd6f40",
      "label": "Chambre",
      "surface": 10,
      "typeLocation": "Autre"
    }
  ],
  "showTotalFourniture": false
}
