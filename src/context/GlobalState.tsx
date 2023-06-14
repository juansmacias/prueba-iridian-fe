import React, { Component } from 'react'

// ----- Utils -----
import {Event,Selection, MySelection, Market} from '@/utils/Models'

// ----- Context -----
import AppContext from '@/context/AppContext' 

interface IGlobalStateProps {
    children:React.ReactNode
}
class GlobalState extends Component<IGlobalStateProps> {
    state = {
        events: [
            {
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
            },
            {
                "id": "EVT_2",
                "name": "Atletico Madrid vs Malaga",
                "markets": [
                    {
                        "id": "MKT_3",
                        "name": "Team to Win",
                        "selections": [
                            {
                                "id": "SEL_6",
                                "name": "Atletico",
                                "price": 1.40
                            },
                            {
                                "id": "SEL_7",
                                "name": "Malaga",
                                "price": 3.05
                            }
                        ]
                    }
                ]
            },
            {
                "id": "EVT_3",
                "name": "Empty Event that shouldn't render",
                "markets": []
            }
        ] as Event[],
        mySelections:[{selection:{
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
        } as Market } as MySelection ]
    }

    isSelectionInMySelections = (selectionId:string):boolean => {
        const foundSelection = this.state.mySelections.find((ms)=>ms.selection.id === selectionId )
        return foundSelection? true : false
    }

    modifySelectionToBetSlip = (market:Market,selection:Selection) => {
        const newMySelection = {market,selection} as MySelection
        const updatedMySelection = [...this.state.mySelections]
        const foundSelection = updatedMySelection.find((ms)=>ms.selection.id === newMySelection.selection.id )

        if(foundSelection){
            const updatedSelectionIndex = updatedMySelection.findIndex(
                item => item.selection.id === newMySelection.selection.id
              )

              updatedMySelection.splice(updatedSelectionIndex, 1);
        } else {
            updatedMySelection.push(newMySelection)
        }

        this.setState({mySelections:updatedMySelection})
    }

    render(): React.ReactNode {
        return <AppContext.Provider value={{
            events: this.state.events,
            mySelections: this.state.mySelections,
            isSelectionInMySelections:this.isSelectionInMySelections,
            modifySelectionToBetSlip:this.modifySelectionToBetSlip
        }}> {this.props.children}</AppContext.Provider >
    }
} 

export default GlobalState