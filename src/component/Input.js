import React from 'react';
import './Input.css'

function Input({input,setInput,list,setlist}) {
    

    const clickHandler=(e)=>{
        
        setlist([...list,{text:input}])
        setInput('')
        console.log(list)
    }
        
    return (
        <div className="input">
            
           <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder="Enter your to-do here"/>
          <button onClick={clickHandler}> <i class="fas fa-plus-square"></i></button>
        </div>
    )
}

export default Input
