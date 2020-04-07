import React from 'react'

class Pixel extends React.Component{

    state = {
        style: {
          height: '25px',
          width: '25px',
          backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
        }
      }
    
    interval = null

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                style: {
                  height: '25px',
                  width: '25px',
                  backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
                }
              })
            }, 10000) 
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    clickHandler = evt => {
        this.setState({
          style: {
            height: '25px',
            width: '25px',
            backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
          }
        })
      }

    mouseEnterHandler = evt => {
        this.setState({
            style: {
                height: '25px',
                width: '25px',
                backgroundColor: 'green'
              }
        })
    }

    doubleClickHandler = evt => {
        this.setState({
            style: {
                height: '25px',
                width: '25px',
                backgroundColor: 'white'
              }
        })
    }

    dragEnterHandler = evt => {
        this.setState({
            style: {
                height: '25px',
                width: '25px',
                backgroundColor: 'yellow'
              }
        })
    }

    contexMenuHandler = evt => {
        evt.preventDefault()
        this.setState({
            style: {
                height: '25px',
                width: '25px',
                backgroundColor: 'black'
              }
        })
    }

    render(){

        return (
            <div 
              style={this.state.style} 
              onClick={this.clickHandler}
              onMouseEnter={this.mouseEnterHandler}
              onDoubleClick={this.doubleClickHandler}
              onDragEnter={this.dragEnterHandler}
              onContextMenu={this.contexMenuHandler}>
            </div>
        )
    }
}

  

export default Pixel