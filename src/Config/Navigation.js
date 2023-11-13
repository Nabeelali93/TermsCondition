import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SearchUmrah from '../Components/SearchUmrah'
import Flight from '../Components/Flights'
import Makkah from '../Components/Makkah'
import PrivacyPolicy from '../Components/PrivacyPolicy'
import TermsCondition from '../Components/TermsCondition'
import DealsOffer from '../Components/DealsOffer'
import HelpCenter from '../Components/HelpCenter'



function Navigation() {
  return (
    <div>

<Routes>
    
    <Route  path='/' element={<SearchUmrah/>}/>
    <Route path='/flight' element={<Flight/>} />
    <Route path='/gethotel' element={<Makkah/>} />
    <Route path='/privacyPolicy' element={<PrivacyPolicy/>} />
    <Route path='/TermsCondition' element={<TermsCondition/>} />

    <Route path='/dealoffer' element={<DealsOffer/>} />
    <Route path='/HelpCenter' element={<HelpCenter/>} />

    
    
    </Routes>      
    </div>
  )
}

export default Navigation

