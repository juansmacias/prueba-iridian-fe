import React from 'react'
import EventItem from '@/components/EventItem'

describe('<EventItem />', () => {
  it('renders', () => {
    const event = {
      "id": "EVT_1",
      "name": "Real Madrid vs Barcelona",
      "markets": [
          {
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
          },
          {
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
      ]
  }
    // see: https://on.cypress.io/mounting-react
    cy.mount(<EventItem event={event}/>)
    cy.contains('Real Madrid vs Barcelona')
    cy.contains('Team to Win')
  })
})