import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Main from './components/Main'
import Info from './components/Info'
import Services from './components/Services'
import Feadback from './components/Feadback'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
 

  return (
    <>
    <section>
    <Header/>
    </section>
    <Main/>
    <Info/>
    <Services/>
    <Feadback/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
