import React from 'react';
import './Input.css'

function Input({input,setInput,lists,setlists}) {
    

    const clickHandler=(e)=>{
        
        setlists([...lists, {id:Math.random(),text:input}])
        setInput('')
        
        
    }
        
    return (
        <div className="input">
            
           <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder="Enter your to-do here"/>
          <button onClick={clickHandler}> <i class="fas fa-plus-square"></i></button>
        </div>
    )
}

export default Input
