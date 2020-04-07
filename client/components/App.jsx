import React from 'react'

import Pixel from './Pixel'

const pixelArr = () => Array(300).fill(<Pixel/>)

class App extends React.Component {

  render() {
  return  (pixelArr())
  }
}

export default App
