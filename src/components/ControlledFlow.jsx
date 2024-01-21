import React, { useState } from 'react'

export default function ControlledFlow({children,data,currentStepIndex,formCompleted,goNext}) {
    const currentChild = React.Children.toArray(children)[currentStepIndex];

  if(!formCompleted){
    console.log(currentChild)
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
