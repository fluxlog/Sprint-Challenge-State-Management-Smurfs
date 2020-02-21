import React, { useState, useContext } from 'react';
import { SmurfContext } from '../context/SmurfContext';

const SmurfForm = props => {
    const [addSmurf, setAddSmurf] = useState({
        name: '',
        age: '',
        height: ''
    })

    const { Add } = useContext(SmurfContext)

    const handleSubmit = () => {
 
        Add(addSmurf);
    }

    const handleChanges = e => {
        const smurf = e.target.name
        setAddSmurf({ 
            ...addSmurf,
             [e.target.name]: e.target.value 
            });
    };

    return (
        <div>
            <h1>Add Smurf</h1>
            <form onSubmit={handleSubmit}>
            <input
            type='text'
            name='name'
            placeholder='Name'
            value={addSmurf.name}
            onChange={handleChanges}
            />
            <input
            type='text'
            name='age'
            placeholder='Age'
            value={addSmurf.age}
            onChange={handleChanges}
            />
            <input
            type='text'
            name='height'
            placeholder='Height'
            value={addSmurf.height}
            onChange={handleChanges}
            />
            <button className = "submitbtn" type="submit">Add Smurf</button>
            </form>


        </div>
    );
}
export default SmurfForm;