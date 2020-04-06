import React from 'react'

class Pixel extends React.Component {
    state = {
        style: {
            height: '20px',
            width: '20px',
            backgroundColor: 'blue'
            }

    }
    render() {
        return(
            <div style={this.state.style}>
            </div>
        )
    }
}

export default Pixel