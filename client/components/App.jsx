import React from 'react'
import Pixel from './Pixel'






const App = () => {
  return (

    <div>



   {Array.from({length: 1000}, (v, i) => <Pixel />)}

  
   </div>
  
  )  
}

export default App
