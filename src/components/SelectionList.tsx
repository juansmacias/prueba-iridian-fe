import React from 'react'

// ----- MUI Components ------
import { Stack, Button } from '@mui/material' 

// ----- Components ------
import CustomSelectionButton from '@/components/CustomSelectionButton'

// ----- Context ------
import AppContext from "@/context/AppContext" 

// ----- Utilis ----
import { Market,Selection } from '@/utils/Models'

interface SelectionListProps {
    market:Market
    selections:Selection[]
}

const SelectionList: React.FC<SelectionListProps> = ({market, selections}) => {

    return (<AppContext.Consumer >
        {context =>(
        <Stack spacing={3} 
            direction={'row'}
            justifyContent="space-between"
            alignItems="center">
                {selections.map(s=>(
                    <CustomSelectionButton key={s.id}
                    title={s.name} 
                    subtitle={s.price+''} 
                    selected={context.isSelectionInMySelections(s.id)} 
                    onClick={()=>context.modifySelectionToBetSlip(market,s)} />
                ))}
        </Stack>)}
    </AppContext.Consumer>)   
}

export default SelectionList