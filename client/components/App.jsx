import React from 'react'

import Pixel from './Pixel'

class App extends React.Component {

  render(){
    return (
      Array(1000).fill('-').map( (item, index) => <Pixel key={index} />)
    )
  }
  
}

export default App
