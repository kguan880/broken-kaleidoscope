import React from 'react'

const randomHexColour = () => `#${Math.floor(Math.random() * 0x1400000).toString(16).padStart(6, 0)}`


class Pixel extends React.Component {

        state = {
        style: {
            height: '35px',
            width: '35px',
            backgroundColor: randomHexColour ()
            }
    }

componentDidMount() {

        console.log('hello')
        setInterval(() => {
          this.setState({
              style: {
                  height: '35px',
                  width: '35px',
                  backgroundColor: randomHexColour()
                  }
              })
          }, 2000);
}

    clickHandler = evt => {
        this.setState({
          style: {
            height: '35px',
            width: '35px',
            backgroundColor: randomHexColour()
            }
        })
      }
      hoverHandler = evt => {
        this.setState({
          style: {
            height: '35px',
            width: '35px',
            backgroundColor: 'green' 
            }
        })
      }
      dragHandler = evt => {
        this.setState({
          style: {
            height: '35px',
            width: '35px',
            backgroundColor: `yellow` 
            }
        })
      }
      dblClickHandler = evt => {
        this.setState({
          style: {
            height: '35px',
            width: '35px',
            backgroundColor: `white` 
            }
        })
      }
      rightClickHandler = evt => {
        this.setState({
          style: {
            height: '35px',
            width: '35px',
            backgroundColor: `black` 
            }
        })
      }



    render() {
        return(
            <div 
            onClick={this.clickHandler}
            onContextMenu={this.rightClickHandler}
            onDoubleClick={this.dblClickHandler}
            onMouseEnter={this.hoverHandler}
            onDragEnter={this.dragHandler}
            style={this.state.style}>
            </div>
        )
    }
}


export default Pixel