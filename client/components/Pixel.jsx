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
 

    render() {
        return (
            <div style={this.state.style} onClick={this.clickHandler}></div>
        )
    }
    
}



export default Pixel