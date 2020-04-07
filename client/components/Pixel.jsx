import React from 'react'

class Pixel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            style: {
                height: '30px',
                width: '30px',
                backgroundColor: 'cornflowerblue',
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