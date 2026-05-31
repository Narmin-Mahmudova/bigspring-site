import React from 'react'

import { Routes } from 'react-router'
import { Route } from 'react-router'
import Layout from '../../layout/Layout'
import Index from '../pages/Index'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Pricing from '../pages/Pricing' 
import FAQ from '../pages/faq'


function Router() {
  return (
      <>
          <Routes>
              <Route path='/' element={<Layout/>}>
                  <Route index element={<Index />} />
                  <Route path='/haqqimizda' element={<About />} />
                  <Route path='/pricing' element={<Pricing />} />
                  <Route path='/elaqe' element={<Contact />} />
                  <Route path='/faq' element={<FAQ />} />
              </Route>
          </Routes>
      
      </>
  )
}

export default Router