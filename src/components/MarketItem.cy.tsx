import React from 'react'
import MarketItem from './MarketItem'

describe('<MarketItem />', () => {
  it('renders option 1', () => {
    const market = {
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
  }
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MarketItem market={market}/>)
    cy.contains('Team to Win')
    cy.contains('Real Madrid')
    cy.contains('Barcelona')
  })

  it('renders option 2', () => {
    const market = {
      "id": "MKT_2",
      "name": "Player to Score First",
      "selections": [
          {
              "id": "SEL_3",
              "name": "Ronaldo",
              "price": 1.15
          },
          {
              "id": "SEL_4",
              "name": "Messi",
              "price": 1.30
          },
          {
              "id": "SEL_5",
              "name": "Bale",
              "price": 1.35
          }
      ]
  }
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MarketItem market={market}/>)
    cy.contains('Player to Score First')
    cy.contains('Ronaldo')
    cy.contains('Messi')
    cy.contains('Bale')
  })
})