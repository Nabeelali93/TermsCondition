import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../Components//Main'
import HotelCardDetails from '../Components/HotelCardDetails'
import FoodPreview from '../Components/FoodPreview'
import DealsOffer from '../Components/DealsOffer'
import ContactDetails from '../Components/Stepper/ContactDetails'
import PaymentDetails from '../Components/Stepper/PaymentDetails'


function Navigation() {
  return (
    <div>

<Routes>
    
    <Route  path='/' element={<Main/>}/>
    <Route path='/CardDetails' element={<HotelCardDetails/>} />

    <Route path='/FoodPreview' element={<FoodPreview/>} />
    <Route path='/DealsOffer' element={<DealsOffer/>} />

    <Route path='/ContactDetails' element={<ContactDetails/>} />


    <Route path='/paymentmethod' element={<PaymentDetails/>} />


    </Routes>      
    </div>
  )
}

export default Navigation

