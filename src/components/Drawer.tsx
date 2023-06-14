import React,{ useState } from "react"

// ----- MUI Layout, Surface, Style ------
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar' 
import { styled } from '@mui/material/styles'
import Container from '@mui/material/Container'

// ----- MUI Navigation -----
import {Drawer as MUIDrawer} from '@mui/material'

// ----- MUI Input, Data Display,Icons  -----
import { Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import IconButton from '@mui/material/IconButton'


// ----- Components -----
import EventPage from '@/components/EventPage'
import Betslip from '@/components/BetslipPage' 

// ----- Component Constants -----
const DRAWER_SIZE = 240


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  }));

const Drawer = (props:React.PropsWithChildren) =>{
    const [open,setOpen ] = useState(false)

    const handleDrawerOpen = () => {
        setOpen(true)
    }
    const handleDrawerClose = () => {
        setOpen(false)
    }

    return (
    <Box sx={{ display: 'flex' }}>
        <AppBar position="fixed">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div"> Event Central </Typography>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="end"
                        sx={{...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </Container>    
        </AppBar>
        <MUIDrawer
            sx={{
            width: DRAWER_SIZE,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: DRAWER_SIZE,
                boxSizing: 'border-box',
            },
            }}
            variant="persistent"
            anchor="right"
            open={open}
        >
            <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
                <ChevronRightIcon />
            </IconButton>
            </DrawerHeader>
            {props.children}
        </MUIDrawer>
    </Box>)
}

export default Drawer