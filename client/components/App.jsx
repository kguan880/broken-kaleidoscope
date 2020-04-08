import React from 'react'

import Pixel from './Pixel'

const App = () => {
  return ( 
  
    Array.from({length: 1000}, (_, i) => <Pixel key={i}/>)
    
  )
}

export default App
