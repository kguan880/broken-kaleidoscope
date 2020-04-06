import React from 'react'

class Pixel extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            style: {
                width: '20px',
                height: '20px',
                backgroundColor: 'cornflowerBlue',
            }
        }
    }

    render() {
        return (
            <div style={this.state.style}></div>
        )
    }
}


export default Pixel