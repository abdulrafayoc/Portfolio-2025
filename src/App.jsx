import { useState } from 'react'
import './App.css'
import Hero from './components/Hero.jsx'
import Nav from './components/Nav.jsx'
import './assets/fonts/Humane-Medium.ttf'
import MyServices from './components/MyServices.jsx'
import Cases from './components/Cases.jsx'
import Quote from './components/Quote.jsx'
import Footer from './components/Footer.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Hero />
      <MyServices/>
      <Cases/>
      <Quote/>
      <Footer/>
    </>
  )
}

export default App