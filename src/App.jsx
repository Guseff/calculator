import 'bootstrap/dist/css/bootstrap.css'

import React from 'react'
import Navbar from './components/Navbar'
import MainField from './components/Mainfield'

const App = () => {
  return (
    <div className="container rounded border py-3 mt-1">
      <Navbar />
      <MainField />
    </div>
  )
}

export default App
