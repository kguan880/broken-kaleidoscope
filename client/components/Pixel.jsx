import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      style: {height: '25px', width: '25px', backgroundColor: randomHexColor()}
    }

    this.timer()
  }

  clickHandler = evt => {
    this.setState({
      style: {height: '25px', width: '25px', backgroundColor: randomHexColor()}
    })
  }

  contextHandler = evt => {
    evt.preventDefault()
    this.setState({
      style: {height: '25px', width: '25px', backgroundColor: 'black'}
    })
  }

  doubleClickHandler = evt => {
    this.setState({
      style: {height: '25px', width: '25px', backgroundColor: "white"}
    })
  }

  mouseEnterHandler = evt => {
    this.setState({
      style: {height: '25px', width: '25px', backgroundColor: "green"}
    })
  }

  dragHandler = evt => {
    this.setState({
      style: {height: '25px', width: '25px', backgroundColor: 'yellow'}
    })
  }

  timer () {
    setInterval(() => {
      this.setState({
        style: {height: '25px', width: '25px', backgroundColor: randomHexColor()}
    })
  }, 500)
}

  render() {
    return (
      <div style={this.state.style} onClick={this.clickHandler} onContextMenu={this.contextHandler} onMouseEnter={this.mouseEnterHandler} onDoubleClick={this.doubleClickHandler} onDragEnter={this.dragHandler}>

      </div>
    )
  }
}

export default Pixel