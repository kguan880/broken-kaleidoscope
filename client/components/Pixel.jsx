import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      style: {
        height: '50px',
        width: '50px',
        backgroundColor: randomHexColor()
      }
    }
  }

  clickHandler = evt => {
    const newStyle = {
      ...this.state.style,
      backgroundColor: randomHexColor()
    }

    this.setState({style: newStyle})
  }

  mouseEnterHandler = evt => {
    const newStyle = {
      ...this.state.style,
      backgroundColor: 'green'
    }

    this.setState({style: newStyle})
  }

  contextMenuHandler = evt => {
    evt.preventDefault()

    const newStyle = {
      ...this.state.style,
      backgroundColor: 'black'
    }

    this.setState({style: newStyle})
  }

  doubleClickHandler = evt => {
    const newStyle = {
      ...this.state.style,
      backgroundColor: 'white'
    }

    this.setState({style: newStyle})
  }

  dragEnterHandler = evt => {
    const newStyle = {
      ...this.state.style,
      backgroundColor: 'yellow'
    }

    this.setState({style: newStyle})
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        style: {
          ...this.state.style,
          backgroundColor: randomHexColor()
        }
      }), 2000
    })
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div style={this.state.style}
        onClick={this.clickHandler}
        onMouseEnter={this.mouseEnterHandler}
        onContextMenu={this.contextMenuHandler}
        onDoubleClick={this.doubleClickHandler}
        onDragEnter={this.dragEnterHandler}>
      </div>
    )
  }
}

export default Pixel
