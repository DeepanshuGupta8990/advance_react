import React, { useState } from 'react'

export default function Controlled_form() {
    const [name, setName] = useState("");
    const [age, setAge] = useState();
    const submitHandler = (e)=>{
        console.log(name);
        console.log(age);
        e.preventDefault();
    }
  return (
    <form onSubmit={submitHandler}>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <input type="number" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
        <input type="submit" value={'Submit'}/>
    </form>
  )
}
