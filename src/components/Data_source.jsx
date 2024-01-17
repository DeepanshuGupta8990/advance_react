import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Data_Source({getData = async()=>{},resource_name,children}) {
    const [resource,setResource] = useState(null);

    useEffect(()=>{
     (async()=>{
        const response = await getData();
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
