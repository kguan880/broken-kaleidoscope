import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`


class Pixel extends React.Component {
    constructor(){
        super()
        this.state = {
            style: {
                width: '20px',
                height: '20px',
                backgroundColor: randomHexColor()
            }
        }
        this.timer()
    }

    clickHandler = (event) => {
        this.setState ({
            style: {
                width: '20px',
                height: '20px',
                backgroundColor: randomHexColor()
            }
        })
    }

    mouseEnterHandler = () => {
        this.setState({
            style: {
                width: '20px',
                height: '20px',
                backgroundColor: 'green'
            }
        })
    }

    doubleClickHandler = () => {
        this.setState({
            style: {
                width: '20px',
                height: '20px',
                backgroundColor: 'white'
            }
        })
    }

    dragEnter = () => {
        this.setState({
            style: {
                width: '20px',
                height: '20px',
                backgroundColor: 'yellow'
            }
        })
    }

    contextMenuHandler = (event) => {
        event.preventDefault()
        this.setState({
            style: {
                width: '20px',
                height: '20px',
                backgroundColor: 'black'
            }
        })
    }

    timer = () => {
        setInterval(() => {
            this.setState({
                style: {
                    height: '20px',
                    width: '20px',
                    backgroundColor: randomHexColor()
                }
            })
        }, 2000)
    }


    render() {
        return (
            <div 
            style={this.state.style}
            timer={this.timer}
            onClick={this.clickHandler}
            onMouseEnter={this.mouseEnterHandler}
            onDoubleClick={this.doubleClickHandler}
            onDragEnter={this.dragEnter}
            onContextMenu={this.contextMenuHandler}>
            </div>
        )
    }
}


export default Pixel