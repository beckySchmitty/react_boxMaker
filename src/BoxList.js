import React, {useState } from "react";
import Box from "./Box"
import { v4 as uuidv4 } from 'uuid';
import NewBoxForm from "./NewBoxForm";


const BoxList = () => {

    const initialState = [
        {id: uuidv4(),height: '200', width: '300', color: 'red' },
        { id: uuidv4(), height: '200', width: '300', color: 'blue' }
    ]
    const [boxes, setBoxes] = useState(initialState);

    const addBox = newBox => {
        setBoxes(boxes => [
            ...boxes,
            { ...newBox, id: uuidv4()}
        ])
    }

    const handleRemove = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
      };

    return (
        <div>
            <div><NewBoxForm addBox={addBox} /></div>
            {boxes.map(box => <Box key={box.id} id={box.id} color={box.color} width={box.width} height={box.height} handleRemove={handleRemove} />)}
        </div>
    )
}

export default BoxList;