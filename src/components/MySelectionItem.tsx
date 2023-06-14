import React from "react"

import { Card, CardHeader, CardContent, CardActions, Divider, Button, Typography } from "@mui/material"

// ----- Context ------
import AppContext from "@/context/AppContext" 

// ----- Utilis ----
import { MySelection } from '@/utils/Models'

interface IMySelectionItemProps {
    mySelection:MySelection
}

const MySelectionItem:React.FC<IMySelectionItemProps> = ({mySelection}) => {

    return (<>
    <Card variant='outlined'>
        <CardHeader title={mySelection.selection.name+'-'+mySelection.market.name} />
        <CardContent>
            {mySelection.selection.price}
        </CardContent>
        <CardActions>
            <AppContext.Consumer>
                {context => (
                    <Button variant='contained' 
                    size='small' 
                    onClick={()=>context.modifySelectionToBetSlip(mySelection.market,mySelection.selection)}
                    >
                        Delete
                    </Button>
                )}
            </AppContext.Consumer>
        </CardActions>
    </Card>
    <Divider />
    </>)
}

export default MySelectionItem