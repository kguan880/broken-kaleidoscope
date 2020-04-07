import React from 'react'
import Pixel from './Pixel'

const App = () => {
  return Array.from({length: 500}, (_, i) => <Pixel key={i}/>)
  // return <Pixel />
}

export default App
