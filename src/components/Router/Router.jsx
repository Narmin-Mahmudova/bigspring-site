import React from 'react'
import { Routes, Route } from 'react-router' 
import Layout from '../../layout/Layout'
import Index from '../pages/Index'
import Mehsullar from '../../Mehsullar'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Pricing from '../pages/Pricing'
import FAQ from '../pages/faq'
import Sebet from '../../Sebet'

function Router() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Mehsullar />} />
                <Route path='haqqimizda' element={<About />} />
                <Route path='pricing' element={<Pricing />} />
                <Route path='elaqe' element={<Contact />} />
                <Route path='faq' element={<FAQ />} />
                <Route path='sebet' element={<Sebet />} />
            </Route>
        </Routes>
    )
}

export default Router