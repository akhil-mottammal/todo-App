import React,{useState} from 'react';
import './App.css';
import Input from './component/Input';
import Post from './component/Post';
function App() {
  const[input,setInput]=useState("")
  const[list,setlist]=useState([])
  return (
    <div className="todo">
      <h2>my todo list_</h2>
     <Input input={input}  setInput={setInput} list={list} setlist={setlist}/>
     
     <Post input={input} lists={list} setlist={setlist}/>
     
    </div>
  );
}

export default App;
