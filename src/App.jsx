import React from 'react'
import Router from './components/Router/Router'
import { BasketProvider } from './components/context/BasketContext'

function App() {
    return (
        <BasketProvider>
            <Router />
        </BasketProvider>
    )
}

export default App