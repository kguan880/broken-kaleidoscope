import React from 'react'

class Pixel extends React.Component {
    // const randomHexColour = 
    
    state = {
        style: {
            height: '20px',
            width: '20px',
            backgroundColor:  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
            }
    }

    clickHandler = evt => {
        this.setState({
          style: {
            height: '20px',
            width: '20px',
            backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
            }
        })
      }
      hoverHandler = evt => {
        this.setState({
          style: {
            height: '20px',
            width: '20px',
            backgroundColor: 'green' 
            }
        })
      }
      dragHandler = evt => {
        this.setState({
          style: {
            height: '20px',
            width: '20px',
            backgroundColor: `yellow` 
            }
        })
      }
      dblClickHandler = evt => {
        this.setState({
          style: {
            height: '20px',
            width: '20px',
            backgroundColor: `white` 
            }
        })
      }
      rightClickHandler = evt => {
        this.setState({
          style: {
            height: '20px',
            width: '20px',
            backgroundColor: `black` 
            }
        })
      }

    render() {
        return(
            <div 
            onClick={this.clickHandler}
            onContextMenu={this.rightClickHandler}
            onDoubleClick={this.dblClickHandler}
            onMouseEnter={this.hoverHandler}
            onDragEnter={this.dragHandler}
             style={this.state.style}>
            </div>
        )
    }
}

export default Pixel