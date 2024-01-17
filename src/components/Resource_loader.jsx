import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Resource_loader({resource_url,resource_name,children}) {
    const [resource,setResource] = useState(null);

    useEffect(()=>{
     (async()=>{
        const response = await axios.get(resource_url);
        setResource(response.data);
     })()
    },[])
  return (
    <>
    {
      React.Children.map(children,(child)=>{
        if(React.isValidElement(child)){
          return React.cloneElement(child,{[resource_name]:resource});
        }

        return child;
      })
    }
    </>
  )
}
