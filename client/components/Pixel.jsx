import React from 'react'

const randomHexColor = () =>
   `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

   



class Pixel extends React.Component {
   state = {
      style: {
         fontFamily: 'Times New Roman',
         height: '34px',
         backgroundColor: randomHexColor(),
         width: '34px'
      },
   }

   clickHandler = (evt) => {
      return this.setState({
         style: {
            fontFamily: this.state.style.fontFamily,
            height: this.state.style.height,
            width: this.state.style.width,
            backgroundColor: randomHexColor()
         }

      })
   }

   mouseHandler = (evt) => {
      return this.setState({
         style: {
            fontFamily: this.state.style.fontFamily,
            height: Math.floor(Math.random() * Math.floor(20)) + 'px',
            width: Math.floor(Math.random() * Math.floor(20)) + 'px',
            backgroundColor: randomHexColor()
         }
      })
   }

   render() {

      return (
         <div onClick={() => this.clickHandler()} onMouseEnter={() => this.mouseHandler()} style={this.state.style}>
         
         </div>
      )
   
}}




export default Pixel