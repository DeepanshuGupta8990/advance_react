import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"

export const includeUser = (Component,userId)=>{
  return (props)=>{
    const [user,setUser] = useState(null);
    console.log(props)
    useEffect(()=>{
        (async()=>{
            const response = await axios.get(`http://localhost:9090/users/${userId}`);
            setUser(response.data);
        })()
    },[])

    return <Component {...props} user={user}/>
  }
}