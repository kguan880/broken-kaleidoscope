import React from 'react'

class Pixel extends React.Component{
    
    randomHexColor = () =>{
       return `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
     }   

     
     constructor(props){
         super(props);
         this.state = {
             style: this.randomHexColor()
            }
        }
        
    randomColour = e =>{
        this.setState({
            style: this.randomHexColor()
        })
     }

    turnWhite = e =>{
        this.setState({
            style:'white'
        })
    }

    render(){
    return(
        <div onMouseEnter= {setTimeout(this.randomColour), 2000} style={{
            height: 50,
            width: 50,
            backgroundColor: this.state.style
        }}></div>
    )
    }
}
export default Pixel