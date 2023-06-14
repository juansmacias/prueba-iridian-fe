import React from "react"

// ----- MUI Components ------
import { Grid } from "@mui/material"
import { Typography,Divider } from "@mui/material"

// ----- Components ------
import SelectionList from '@/components/SelectionList'

// ----- Utilis ----
import { Market } from '@/utils/Models'

interface MarketListProps {
    market: Market
}

const MarketItem: React.FC<MarketListProps> = ({market}) =>{

    return (<>
        <Grid item xs={12}>
            <Typography variant='subtitle1'> {market.name} </Typography>
        </Grid>
        <Grid item xs={12}>
            <SelectionList market={market} selections={market.selections} />
        </Grid>
        <Divider/>
    </>)
}

export default MarketItem