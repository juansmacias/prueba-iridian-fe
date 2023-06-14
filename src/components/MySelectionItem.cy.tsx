import React from 'react'
import MySelectionItem from './MySelectionItem'

import {Market, Selection, MySelection} from '@/utils/Models'

describe('<MySelectionItem />', () => {
  it('renders', () => {
    const mySelection = {
      selection:{
      "id": "SEL_1",
      "name": "Real Madrid",
      "price": 1.23
  } as Selection,  
  market:{
      "id": "MKT_1",
      "name": "Team to Win",
      "selections": [
          {
              "id": "SEL_1",
              "name": "Real Madrid",
              "price": 1.23
          },
          {
              "id": "SEL_2",
              "name": "Barcelona",
              "price": 2.05
          }
      ]
  } as Market
  } as MySelection

    // see: https://on.cypress.io/mounting-react
    cy.mount(<MySelectionItem mySelection={mySelection} />)

    cy.contains('Real Madrid-Team to Win')
    cy.contains('1.23')
    cy.contains('Delete')
  })
})