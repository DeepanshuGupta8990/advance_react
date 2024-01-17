import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function CurrentUser_loader({children}) {
    const [user,setUser] = useState(null);

    useEffect(()=>{
     (async()=>{
        const response = await axios.get("http://localhost:9090/current-user");
        setUser(response.data);
     })()
    },[])
  return (
    <>
    {
      React.Children.map(children,(child)=>{
        if(React.isValidElement(child)){
          return React.cloneElement(child,{user});
        }

        return child;
      })
    }
    </>
  )
}
