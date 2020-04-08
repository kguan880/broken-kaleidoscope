import React from 'react'

class Pixel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            style: {
                height: '15px',
                width: '15px',
                backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
            } 
        }
      
    }

    clickHandler = (event) => {
        this.setState ({
          style: {
            height: '15px',
            width: '15px',
            backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}` 
            }
        })
      }
      
    mouseEnterHandler = () => {
        this.setState({
            style: {
                width: '15px',
                height: '15px',
                backgroundColor: 'red'
            }
        })
    }

    contextMenuHandler = (event) => {
        event.preventDefault()
        this.setState({
            style: {
                width: '15px',
                height: '15px',
                backgroundColor: 'black'
            }
        })
    }

    doubleClickHandler = (event) => {
        this.setState({
            style: {
                width: '15px',
                height: '15px',
                backgroundColor: 'white'
            }
        })
    }

    dragEnterHandler = (event) => {
        this.setState({
            style: {
                width: '15px',
                height: '15px',
                backgroundColor: 'green'
            }
        })
    }

    render() {
        return (
            <div style={this.state.style} 
            onClick={this.clickHandler}
            onMouseEnter={this.mouseEnterHandler}
            onContextMenu={this.contextMenuHandler}
            onDoubleClick={this.doubleClickHandler}
            onDragEnter={this.dragEnterHandler}
            ></div>
        )
    }
    
}



export default Pixel