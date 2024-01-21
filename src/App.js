import { useState } from 'react';
import './App.css';
import Controlled_form from './components/Controlled_form';
import UncontrolledFlow from './components/UncontrolledFlow';
import Uncontrolled_Form from './components/Uncontrolled_Form';

const Step = ({count,placeholderVal,initialValue=undefined,type,goNext,valueName})=>{
  const [data,setData] = useState(initialValue);
  return(
    <>
    <h1>Step {count}</h1>
    <input type={type} placeholder={placeholderVal} value={data} onChange={(e)=>{setData(e.target.value);}}/>
    <button onClick={()=>{goNext({[valueName]:data})}}>Next</button>
    </>
  )
}

const StepOne = ({goNext}) => {
  return(
    <Step count={1} placeholderVal={'Enter your name'} initialValue={""} type={'text'} goNext={goNext} valueName={'Name'}/>
  )
}
const StepTwo = ({goNext}) => {
  return(
    <Step count={2} placeholderVal={'Enter your age'}  type={'number'} goNext={goNext} valueName={"Age"}/>
  )
}
const StepThree = ({goNext}) =>{
  return(
    <Step count={3} placeholderVal={'Enter your country'} initialValue={""} type={'text'} goNext={goNext} valueName={"Country"}/>
  )
}

function App() {
  return (
    <>
    <Uncontrolled_Form/>
    <Controlled_form/>
    <UncontrolledFlow>
      <StepOne/>
      <StepTwo/>
      <StepThree/>
    </UncontrolledFlow>
    </>
  );
}

export default App;
