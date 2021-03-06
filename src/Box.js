import React from "react"


const Box = ({handleClick, color, width, height}) => {

    return (
        <div 
        style={{
            height: `${height}px`,
            width: `${width}px`,
            backgroundColor: `${color}`
          }}>
        <button onClick={handleClick}>X</button>
        </div>
    )
}

export default Box;