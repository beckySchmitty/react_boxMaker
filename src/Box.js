import React from "react"


const Box = ({id, handleRemove, color, width, height}) => {
    const remove = () => {
        handleRemove(id)
    }

    return (
        <div 
        style={{
            height: `${height}px`,
            width: `${width}px`,
            backgroundColor: `${color}`
          }}>
        <button onClick={remove}>X</button>
        </div>
    )
}

export default Box;