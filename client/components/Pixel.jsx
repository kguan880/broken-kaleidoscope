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

    render() {
        return(
            <div onClick={this.clickHandler} style={this.state.style}>
            </div>
        )
    }
}

export default Pixel