import React from 'react';
import { useState } from 'react/cjs/react.development';

function List(props) {


    return(
        <div onClick={()=>{props.delete(props.id)}}>
            <li>{props.newItem}</li> 
            </div> 
   )
}

export default List;