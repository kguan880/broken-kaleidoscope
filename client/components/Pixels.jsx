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
    this.timer()
  }
  
  mouseEnter = () =>{
    this.setState({
      style:{
        height: "50px",
        width: "50px",
        backgroundColor: 'green',
      }
    })
  }

  contextMenu = () =>{
    this.setState({
      style:{
        height: "50px",
        width: "50px",
        backgroundColor: 'black',
      }
    })
  }

  dblClick = () =>{
    this.setState({
      style:{
        height: "50px",
        width: "50px",
        backgroundColor: 'white',
      }
    })
  }

  dragEnter = () =>{
    this.setState({
      style:{
        height: "50px",
        width: "50px",
        backgroundColor: 'yellow',
      }
    })
  }

  timer = () =>{
    setInterval(()=>{
      this.setState({
        style:{
          height: "50px",
          width: "50px",
          backgroundColor: this.randomHexColor()
        }
      })
    },1000)
  }

  render(){
    //this.timer()
    return (
      <div onMouseEnter={this.mouseEnter} onContextMenu={this.contextMenu} onDoubleClick={this.dblClick} onDragEnter={this.dragEnter} style={this.state.style}>
      </div>
    )
  }
}

export default Pixels;