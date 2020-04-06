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

    clickHandler= evt => {
        this.setState({
            backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
        })
    }

    render() {
        return (
            <div onClick={this.clickHandler} style={this.state}></div>
        )
    }
}

export default Pixel
