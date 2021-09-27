import React,{useState} from 'react'
import axios from 'axios'

const Getreq = () => {
    const [state, setstate] = useState([])
    const fetchdata=async()=>{
        try{
            const request=await axios.get("https://jsonplaceholder.typicode.com/posts")
            setstate(request.data)
        }
        catch(error){
            console.log("Api not found")
        }

    }
    return (
        <div>
            <button onClick={fetchdata}>Fetch</button>
            {
                state.map((currElem)=>{
                    return <p>{currElem.title}</p>
                })
            }
        </div>
    )
}

export default Getreq
