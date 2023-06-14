import React, { useState } from 'react'

// ----- MUI Components ------
import {Box,Stack} from '@mui/material'

// ----- Components -----
import BetslipPage from '@/components/BetslipPage'
import Drawer from '@/components/Drawer'
import EventPage from '@/components/EventPage'

export default () => {

    return (<>
        <Drawer>
            <BetslipPage/>
        </Drawer>
        <EventPage />
    </>)
}

