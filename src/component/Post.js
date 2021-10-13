import React from 'react'
import './Post.css'
function Post({lists,setlist}) {

    
    const remove=({id})=>{
        setlist(lists.filter((list)=>
            list.id!==id
        ))
        
}
    return (
       
        <div className="post">
         {
         lists.map((list)=>
             (     <div > <p onClick={()=>remove(lists)}>{list.text} </p>
             </div>
                  
                 
                
             )
         )}
        </div>
    )
}


export default Post
