import React from 'react'

export default function Uncontrolled_Form() {

    const nameInputRef = React.createRef();
    const ageInputRef = React.createRef();

    const submitHandler = (e)=>{
        console.log(nameInputRef.current.value);
        console.log(ageInputRef.current.value);
        e.preventDefault();
    }
  return (
    <form onSubmit={submitHandler}>
      <input type="text" placeholder='Name' name='name' ref={nameInputRef}/>
      <input type="number" placeholder='Age' name='age' ref={ageInputRef}/>
      <input type="submit" value={"Submit"} />
    </form>
  )
}
