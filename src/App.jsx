import { useState } from 'react'
import './App.css'
import Hero from './components/Hero.jsx'
import Nav from './components/Nav.jsx'
import './assets/fonts/Humane-Medium.ttf'
import MyServices from './components/MyServices.jsx'
import Cases from './components/Cases.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Hero />
      <MyServices/>
      <Cases/>
    </>
  )
}

export default App