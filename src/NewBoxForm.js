import React, {useState} from "react"

const NewBoxForm = ({addBox}) => {
    const initialState = {
        width: '',
        height: '',
        color:''
    }
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({...formData})
        console.log({...formData})
        setFormData(initialState)
    }

    return (
        <form onSubmit={handleSubmit}>

            <label htmlFor="height">Height</label>
            <input 
            id="height" 
            type="text" 
            name="height"
            placeholder="height" 
            value={formData.height}
            onChange={handleChange}/>

            <label htmlFor="width">Width</label>
            <input 
            id="width" 
            type="text" 
            name="width"
            placeholder="width" 
            value={formData.width}
            onChange={handleChange}/>

            <label htmlFor="color">Color</label>
            <input 
            id="color" 
            type="text" 
            name="color"
            placeholder="color" 
            value={formData.color}
            onChange={handleChange}/>

            <button>Add Box!</button>
        </form>
    )
}

export default NewBoxForm;