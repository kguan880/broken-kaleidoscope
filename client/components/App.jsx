import React from 'react'
import Pixel from './pixel'

const App = () => {
  const pixels = Array.from({length: 500}, () => <Pixel />)

  return pixels
}

export default App
