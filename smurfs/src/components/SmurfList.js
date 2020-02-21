import React, { useContext } from 'react';
import { SmurfContext } from '../context/SmurfContext';
import Smurf from './Smurf';

const SmurfList = props => {
    const { smurfs } = useContext(SmurfContext);

    return (
        <div>
{smurfs && smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf} />)}
        </div>
    )
}

export default SmurfList;