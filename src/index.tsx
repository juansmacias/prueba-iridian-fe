import React from 'react'
import { createRoot } from 'react-dom/client'

// ---- CSS Imports ----
import './index.css'
import '@fontsource/roboto/300.css'

// ---- React Components -----
import App from '@/components/App'
import GlobalState from '@/context/GlobalState'

const container = document.getElementById('root')!
const root = createRoot(container)
root.render(
    <GlobalState>
        <App/>
    </GlobalState>
)

