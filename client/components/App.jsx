import React from 'react'
import Pixel from './pixel'

const App = () => {
  return (
    <div>
      {Array.from({length: 260000}, (v, i) => <Pixel />)}

      
      <div>React development has begun!</div>
    </div>
    
  )
}

export default App
