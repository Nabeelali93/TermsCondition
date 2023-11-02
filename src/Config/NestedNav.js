import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SearchUmrah from '../Components/SearchUmrah'
import Makkah from '../Components/Makkah'
import HotelCardDetails from '../Components/HotelCardDetails'



function NestedNav() {
  return (
    <>


<Routes>
    
    <Route  path='/' element={<SearchUmrah/>}/>
    <Route path='/Makkah' element={<Makkah/>} />
    <Route path='/CardDetails' element={<HotelCardDetails/>} />
    </Routes> 


      
    </>
  )
}

export default NestedNav
