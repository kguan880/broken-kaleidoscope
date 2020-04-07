import React from 'react'


class Pixel extends React.Component {
    state = {
        style: {
            height: '30px',
            width: '30px',
            backgroundColor: 'red',
        }
    }
    

    randomColor = (event) => {
        const randomHexColor = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

        this.setState({
            style: {
                height: '30px',
                width: '30px',
                backgroundColor: randomHexColor()
            }
        })
    }

    turnGreen = (event) => {
        this.setState({
            style: {
                height: '30px',
                width: '30px',
                backgroundColor: 'green'
            }
        })
    }

    turnBlack = (event) => {
        this.setState({
            style: {
                height: '30px',
                width: '30px',
                backgroundColor: 'black'
            }
        })
        event.preventDefault()
    }

    turnWhite = (event) => {
        this.setState({
            style: {
                height:'30px',
                width: '30px',
                backgroundColor: 'white'
            }
        })
    }

    turnYellow = (event) => {
        this.setState({
            style: {
                height: '30px',
                width: '30px',
                backgroundColor: 'yellow'
            }
        })
    }

    timer = () => {
        const randomHexColor = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

        setInterval(() => {
            this.setState({
                style: {
                    height: '30px',
                    width: '30px',
                    backgroundColor: randomHexColor()
                }
            })
        }, 1000)
    }

    render() {
        return <div style={this.state.style} onClick={this.randomColor} onMouseEnter={this.turnGreen} onContextMenu={this.turnBlack} onDoubleClick={this.turnWhite} onDragEnter={this.turnYellow}></div>
        // return <div style={this.state.style} onMouseEnter={this.timer} onMouseLeave={this.state.turnYellow}></div>
    }
}

export default Pixel