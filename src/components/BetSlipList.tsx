import React from 'react'

// ----- MUI Components ------
import { Stack,Divider } from "@mui/material"
import { Card, CardHeader, CardContent } from "@mui/material"

// ----- Components ------
import MySelectionItem from '@/components/MySelectionItem'

// ----- Context ------
import AppContext from "@/context/AppContext" 

export default () => {

    return (<AppContext.Consumer>
        {context =>(
            <Stack spacing={2}>
                {context.mySelections.map(ms=>(
                    <MySelectionItem mySelection={ms} key={ms.market.id+'-'+ms.selection.id}/>
                ))}
            </Stack>
        )}
    </AppContext.Consumer>)
}
