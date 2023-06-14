import React from 'react'

import { Card, CardHeader, CardContent, Divider } from "@mui/material"

import { Event } from '@/utils/Models'

// ----- Components ------
import MarketList from '@/components/MarketList'

interface IEventItemProps {
    event: Event
}

const EventItem:React.FC<IEventItemProps>  = ({event}) => {

    return (
        <Card variant="outlined" key={event.id}>
        <CardHeader title={event.name} />
        <CardContent>
            <Divider />
            <MarketList markets={event.markets} />
        </CardContent>
    </Card>
    )
}

export default EventItem