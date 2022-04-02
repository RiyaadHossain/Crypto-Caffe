import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './components/About/About'
import Coins from './components/Coins/Coins'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Homepage from './components/Homepage/Homepage'
import CoinDetails from './components/CoinDetails/CoinDetails'
import NotFound from './components/NotFound/NotFound'
import BdAddress from './components/Contact/BdAddress'
import UsAddress from './components/Contact/UsAddress'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Homepage/> }/>
        <Route path='/coins' element={<Coins/> }/>
        <Route path='/coin-details/:id' element={<CoinDetails />}/>
        <Route path='/contact' element={<Contact />}>
          <Route path='bdaddress' element={ <BdAddress/>}/>
          <Route path='usaddress' element={ <UsAddress/>}/>
        </Route>
        <Route path='/about' element={<About/> }/>
        <Route path='*' element={<NotFound/> }/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
