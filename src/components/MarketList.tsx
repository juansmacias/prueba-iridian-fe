import React from "react"

// ----- MUI Components ------
import { Grid,Stack } from "@mui/material"
import { Typography,Button,Divider } from "@mui/material"

// ----- Components ------
import MarketItem from '@/components/MarketItem'

// ----- Utilis ----
import { Market } from '@/utils/Models'

interface MarketListProps {
    markets?: Market[]
}

const MarketList: React.FC<MarketListProps> = ({markets})=>{

    return (<Grid container spacing={3}>
        {markets?.map(m=>(
            <MarketItem market={m} key={m.id}/>
        ))}
    </Grid>)
}

export default MarketList