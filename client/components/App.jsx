import React from 'react'
import Pixel from './Pixel'

class App extends React.Component{

  
  render(){
      return (
        <>
        <div>React development has begun!</div>
        {Array.from({length:200}, (i) => <Pixel/>)}
        </>
      )
    }
}

export default App
