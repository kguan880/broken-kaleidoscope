import React from 'react'

class Pixel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            height: '40px',
            width: '40px',
            backgroundColor: 'red'
        }
    }

    render() {
        return (
            <div style={this.state}></div>
        )
    }
}

export default Pixel
