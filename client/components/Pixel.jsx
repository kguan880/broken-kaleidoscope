import React from 'react'

class Pixel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            height: '40px',
            width: '40px',
            backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
        }
    }

    clickHandler = evt => {
        this.setState({
            backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
        })
    }

    onEnter = evt => {
        this.setState({
            backgroundColor: 'green'
        })
    }

    onDblClick = evt => {
        this.setState({
            backgroundColor: 'white'
        })
    }

    onDrag = evt => {
        this.setState({
            backgroundColor: 'yellow'
        })
    }

    rightClickHandler = evt => {
        evt.preventDefault()
        this.setState({
            backgroundColor: 'black'
        })
    }

    render() {
        return (
            <div onContextMenu={this.rightClickHandler} onDragEnter={this.onDrag} onDoubleClick={this.onDblClick} onMouseEnter={this.onEnter} onClick={this.clickHandler} style={this.state}></div>
        )
    }
}

export default Pixel
