import React from 'react'


class Pixel extends React.Component {
    constructor(props) {
        super(props)

        this.state = { 
            style: {
                 width: '25px',
                 height: '25px',
                 backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6,0)}`,
            }
        }
        
    }


colorGreenHandler = (event) => {
    this.setState ({
             style: {
                 width: '25px',
                 height: '25px',
                 backgroundColor: 'green' 
    } 
    })
}


colorBlueHandler = (event) => {
    this.setState ({
             style: {
                 width: '25px',
                 height: '25px',
                 backgroundColor: 'blue'
    } 
    })
}


colorRedHandler = (event) => {
    this.setState ({
         style: {
                 width: '25px',
                 height: '25px',
                 backgroundColor: 'red'
    } 
    })
}

colorOrangeHandler = (event) => {
    this.setState ({
             style: {
                 width: '25px',
                 height: '25px',
                 backgroundColor: 'orange'
    } 
    })
}

// changeColour = () => {
//     this.setState ({
//              style = {
//                  width: '25px',
//                  height: '25px',
//                  backgroundColor: randomColor()
//     } 
//     })
// }


render() {
    
    return ( 
        <div style = {this.state.style} onClick = {this.colorGreenHandler} onMouseEnter = {this.colorBlueHandler}></div>
        )
    }

}
export default Pixel