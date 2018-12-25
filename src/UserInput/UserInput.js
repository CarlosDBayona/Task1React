import React from 'react';
import './UserInput.css'

const userInput = (props)=>{
    return (
        <input value={props.value} onChange={props.change} className='Input'></input>
    )
}
export default userInput