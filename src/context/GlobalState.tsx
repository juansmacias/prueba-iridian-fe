import React, { Component } from 'react'

// ----- Utils -----
import {Event,Selection, MySelection, Market} from '@/utils/Models'

// ----- Context -----
import AppContext from '@/context/AppContext' 

import { getEventsAsync } from '@/api/events'

interface IGlobalStateProps {
    children:React.ReactNode
}
class GlobalState extends Component<IGlobalStateProps> {
    state = {
        events: [
        ] as Event[],
        mySelections:[ ] as MySelection[]
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

    setEvents = (events:Event[]) => {
        this.setState({events:events})
    }

    fetchDataFromAPI = async () => {
        const response = await getEventsAsync();
        if(response.data){
            this.setState({events:response.data})
        }
      }

    render(): React.ReactNode {
        return <AppContext.Provider value={{
            events: this.state.events,
            mySelections: this.state.mySelections,
            isSelectionInMySelections:this.isSelectionInMySelections,
            modifySelectionToBetSlip:this.modifySelectionToBetSlip,
            setEvents:this.setEvents,
            fetchDataFromAPI:this.fetchDataFromAPI
        }}> {this.props.children}</AppContext.Provider >
    }
} 

export default GlobalState