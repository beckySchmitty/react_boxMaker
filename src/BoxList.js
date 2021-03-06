import React, {useState } from "react";
import Box from "./Box"
import { v4 as uuidv4 } from 'uuid';


const BoxList = () => {

    const initialState = [
        {id: uuidv4(),height: '200', width: '300', color: 'red' },
        { id: uuidv4(), height: '200', width: '300', color: 'blue' }
    ]
    const [boxes, setBoxes] = useState(initialState);

    // const handleSubmit = () => {
    //     setBoxes([{height: '200px;', width: '300px;', color: 'red;' },{height: '200px;', width: '300px;', color: 'blue;' }])
    // }

    const handleClick = () => {
        setBoxes([
            {id: uuidv4(), height: '200', width: '300', color: 'red' },
            { id: uuidv4(), height: '200', width: '300', color: 'blue' }
        ])
    }

    return (
        <div>
            {boxes.map(box => <Box key={box.id} color={box.color} width={box.width} height={box.height} handleClick={handleClick}/>)}
        </div>
    )
}

export default BoxList;