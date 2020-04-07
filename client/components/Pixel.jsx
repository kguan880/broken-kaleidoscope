import React from 'react'

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

    leftClickHandler = evt => {
        this.setState({
          // ... update style here ...
            style: {
                height: '50px',
                width: '50px',
                backgroundColor: randomHexColor()
            }
        })
    }

    hoverHandler = evt => {
        this.setState({
          // ... update style here ...
            style: {
                height: '50px',
                width: '50px',
                backgroundColor: 'green'
            }
        })
    }

    rightClickHandler = evt => {
        this.setState({
          // ... update style here ...
            style: {
                height: '50px',
                width: '50px',
                backgroundColor: 'black'
            }
        })
    }

    doubleClickHandler = evt => {
        this.setState({
          // ... update style here ...
            style: {
                height: '50px',
                width: '50px',
                backgroundColor: 'white'
            }
        })
    }

    clickDragHandler = evt => {
        this.setState({
          // ... update style here ...
            style: {
                height: '50px',
                width: '50px',
                backgroundColor: 'yellow'
            }
        })
    }

    render() {
        return (
            <div 
                onDragEnter={this.clickDragHandler} 
                onDoubleClick={this.doubleClickHandler} 
                onContextMenu={this.rightClickHandler} 
                onMouseEnter={this.hoverHandler} 
                onClick={this.leftClickHandler} 
                style={this.state.style}>
            </div>
        )
    }
}

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

export default Pixel