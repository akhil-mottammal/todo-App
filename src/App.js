import React,{useState} from 'react';
import './App.css';
import Input from './component/Input';
import Post from './component/Post';
function App() {
  const[input,setInput]=useState("")
  const[lists,setlists]=useState([])
  return (
    <div className="todo">
      <h2>my todo list_</h2>
     <Input input={input}  setInput={setInput} lists={lists} setlists={setlists}/>
     
     <Post input={input} lists={lists} setlists={setlists}/>
     
    </div>
  );
}

export default App;
