import React from 'react';
import { useState } from 'react/cjs/react.development';

function List(props) {

    const[isDone,setIsDone]=useState(false)

function handlerClick(params) {
    setIsDone(prevValue=>(!prevValue))
}

    return(
        <div onClick={handlerClick}>
            <li style={{textDecoration: isDone? "line-through":"none"}}>{props.newItem}</li> 
            </div> 
   )
}

export default List;