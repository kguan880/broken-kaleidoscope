import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {

  //   }
  // }

  state = {
    style: {
      height: '50px', 
      width: '50px', 
      backgroundColor: randomHexColor()
    }
  }

  handleClick = () => {
    const newStyle = {...this.state.style}

    newStyle.backgroundColor = 'rgb(14, 152, 255)'

    this.setState({
      style:  newStyle
    })
  }

  render() {
    console.log(this.state.style)
    return (
    <div style={this.state.style} onClick={this.handleClick}></div>
    )
  }
}

export default Pixel
