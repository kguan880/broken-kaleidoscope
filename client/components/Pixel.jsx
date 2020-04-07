import React from 'react'
console.log(document.body.clientHeight)
const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
class pixel extends React.Component  {
 
  state = {
    style: {
      height: '50px',
      width: '50px',
      backgroundColor: randomHexColor() 

    }
  }

  clickHandler = evt => {
    return this.setState({
      style: {
        height: this.state.style.height,
        width: this.state.style.width,
        backgroundColor: randomHexColor() 
      }
      

    })
    
  }
  mouseHandler = evt => {
    return this.setState({
      style: {
        height: this.state.style.height,
        width: this.state.style.width,
        backgroundColor: 'green'
      }
      

    })
    
  }
  contextHandler = evt => {
    evt.preventDefault()
    return this.setState({
      style: {
        height: this.state.style.height,
        width: this.state.style.width,
        backgroundColor: 'black'
      }
      

    })
    
  }


  
  render() {
    return <div onContextMenu={() => this.contextHandler()} onClick={() => this.clickHandler()} onMouseEnter={() => this.mouseHandler()}style={this.state.style}></div>
  }
}

export default pixel