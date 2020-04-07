import React from 'react'

class Pixels extends React.Component{
  randomHexColor = () =>
    `#${Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, 0)}`;

  constructor(props){
    super(props)
    this.state = {
      style: {
        height: "50px",
        width: "50px",
        backgroundColor: this.randomHexColor()
      },
    }
  }
  
  mouseOver = (event) =>{
    this.setState({
      style:{
        height: "100px",
        width: "100px",
        backgroundColor: this.randomHexColor()
      }
    })
  }

  mouseOut = (event) =>{
    this.setState({
      style: {
        height: "50px",
        width: "50px",
        backgroundColor: this.randomHexColor()
      },
    })
  }

  render(){
    return (
      <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} style={this.state.style}>
      </div>
    )
  }
}

export default Pixels;