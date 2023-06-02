import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Attibution from './components/Attribution/Attribution'

import './App.css'
import RatingCard from './components/RatingCard/RatingCard'

function App() {
  return (
    <>
      <RatingCard />
      <Attibution />
    </>
  )
}

export default App


