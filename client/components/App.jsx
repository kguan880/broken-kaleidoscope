import React from 'react'

import Pixel from './Pixel'

const App = () => {
  return (
    <>
      {new Array(500).fill(<Pixel />)}
    </>
    
  )
}

export default App
