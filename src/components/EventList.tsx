import React from "react"
// ----- MUI Components ------
import { Stack,Divider } from "@mui/material"
import { Card, CardHeader, CardContent } from "@mui/material"

// ----- Components ------
import EventItem from "@/components/EventItem"

// ----- Context ------
import AppContext from "@/context/AppContext" 

// ----- Utilis ----
import { Event } from '@/utils/Models'

const EventList = () => {

    return (<Stack spacing={3}
		direction="column"
		justifyContent="flex-start"
		alignItems="stretch" sx={{mt:10,pr:3,pl:3}}>
		<AppContext.Consumer>
			{context => (
				<React.Fragment>
					{context.events.filter(e=>e.markets&&e.markets?.length>0).map(e=>(
						<EventItem event={e}/> 
					))}
				</React.Fragment>
			)}
		</AppContext.Consumer>
    </Stack>)
}

export default EventList