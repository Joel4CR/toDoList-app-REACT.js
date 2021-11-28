import React, { useState } from 'react';
import List from './components/List';

function App() {

const[item,setItem]=useState([])
const[saveItem,setSaveItem]=useState("")
let key=1;

function handlerNewItem(event) {
   setSaveItem (event.target.value)
}

function onclick() {
  setItem(prevValue=>[...prevValue,saveItem ])
  setSaveItem("");
}




  return(
  <div className="container">
    <div className="heading"> 
      <h1>To-Do List</h1>
    </div>
    <div className="form">
      <input type="text" onChange={handlerNewItem} value={saveItem}/>
      <button onClick={onclick}><span>Add</span></button>
    </div>
    <div>
      <ul>
        {item.map((newItem)=>{
        return(
        <List 
        key={key++}
        newItem={newItem}
        />
          )

        })
        }
      </ul>
    </div>
  </div>
  )}

export default App;