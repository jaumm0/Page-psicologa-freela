import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Info from './components/Info'
import Services from './components/Services'
import Feadback from './components/Feadback'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
    <section>
    <Header onAgendarClick={openModal} />
    </section>
    <Main onAgendarClick={openModal} />
    <Info/>
    <Services/>
    <Feadback/>
    <Contact onAgendarClick={openModal} />
    <Footer/>
    <BookingModal isOpen={isModalOpen} onClose={closeModal} />
    <WhatsAppButton />
    </>
  )
}

export default App
