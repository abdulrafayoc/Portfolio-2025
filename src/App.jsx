import { useState } from 'react'
import './App.css'
import Hero from './components/Hero.jsx'
import Nav from './components/Nav.jsx'
import './assets/fonts/Humane-Medium.ttf'
import GooeyCursor from './components/GooeyCursor.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Hero />
      {/* <GooeyCursor /> */}
    </>
  )
}

export default App