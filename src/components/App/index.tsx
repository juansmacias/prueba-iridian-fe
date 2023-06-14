import React, { useState, useEffect,useContext } from 'react'

// ----- MUI Components ------
import {Box,Stack} from '@mui/material'

// ----- Components -----
import Drawer from '@/components/Drawer'
import EventPage from '@/components/EventPage'
import BetslipPage from '@/components/BetslipPage'

// ----- Context ------
import AppContext from "@/context/AppContext" 

export default () => {

const { fetchDataFromAPI } = useContext(AppContext)

useEffect(()=>{
    fetchDataFromAPI()
},[])

    return (<>
        <Drawer>
            <BetslipPage/>
        </Drawer>
        <EventPage />
    </>)
}

