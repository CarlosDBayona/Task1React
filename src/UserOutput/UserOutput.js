import React from 'react';

const userOutput = (props)=>{
    const style={
        border: '1px solid ',
        margin: '16px auto',
        width: '70%'
    }
    return (
        <div style={style}>
            <p >The username is: </p>
            <p>{props.username}</p>
        </div>
    )
}
export default userOutput