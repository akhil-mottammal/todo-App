import React from 'react'
import './Post.css'
function Post({lists,setlists}) {

    
    const remove=(id)=>{
        setlists(lists.filter((list)=>{
        return list.id !==id
    } ))
        }
    return (
       
        <div className="post">
         {
         lists.map((list)=>
         (      <p onClick={()=>remove(list.id)} key={lists.id}>{list.text} </p>
             
           ))}
        </div>
    )
}


export default Post
