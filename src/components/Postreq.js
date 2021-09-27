import React,{useState} from 'react'
import axios from 'axios'

const Postreq = () => {
    const [newid,setNewId]=useState("")
    const [title,setTitle]=useState("")
    const [body,setBody]=useState("")

    const PostData=async()=>{
        try{
            const request=await axios.post("https://jsonplaceholder.typicode.com/posts",{newid,title,body})
            console.log(request.data)
        }
        catch(error){
            console.log("API not found")
        }
    }
    return (
        <div>
            <label >newid: </label>
            <input type="text" 
            value={newid}
            onChange={(event)=>{setNewId(event.target.value)}}/><br/>
            <label >title: </label>
            <input type="text"
            value={title}
            onChange={(event)=>{setTitle(event.target.value)}} /><br/>
            <label >body: </label>
            <input type="text" 
            value={body}
            onChange={(event)=>{setBody(event.target.value)}}/><br/>
            <button onClick={PostData}>Submit</button>
        
        </div>
    )
}

export default Postreq
