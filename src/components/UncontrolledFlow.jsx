import React, { useState } from 'react'

export default function UncontrolledFlow({children}) {
    const [data,setData] = useState({});
    const [currentStepIndex,setCurrentStepIndex] = useState(0);
    const [formCompleted,setformCompleted] = useState(false);

    const currentChild = React.Children.toArray(children)[currentStepIndex];

    const goNext = (dataObject)=>{
        if(currentStepIndex<React.Children.toArray(children).length-1){
            setCurrentStepIndex(currentStepIndex+1);
            setData({
                ...data,
                ...dataObject
            })
        }
        else{
            setData({
                ...data,
                ...dataObject
            })
            setformCompleted(true);
            console.log(data)
            setCurrentStepIndex(0)
        }
    }
  if(!formCompleted){
    if(React.isValidElement){
        return React.cloneElement(currentChild,{goNext})
    }
  }
  return(
    <>
    <h1>Form completed</h1>
    <p>name: {data.Name}</p>
    <p>age : {data.Age}</p>
    <p>country: {data.Country}</p>
    </>
  )
}
