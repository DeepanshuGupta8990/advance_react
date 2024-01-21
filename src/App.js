import { useState } from 'react';
import './App.css';
import Controlled_form from './components/Controlled_form';
import UncontrolledFlow from './components/UncontrolledFlow';
import Uncontrolled_Form from './components/Uncontrolled_Form';
import ControlledFlow from './components/ControlledFlow';

const Step = ({count,placeholderVal,initialValue=undefined,type,goNext,valueName})=>{
  const [data,setData] = useState(initialValue);
  return(
    <>
    <h1>Step {count}</h1>
    <input type={type} placeholder={placeholderVal} value={data} onChange={(e)=>{setData(e.target.value);}}/>
    <button disabled={data===initialValue} onClick={()=>{goNext({[valueName]:data})}}>Next</button>
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
  const [data,setData] = useState({});
  const [currentStepIndex,setCurrentStepIndex] = useState(0);
  const [formCompleted,setformCompleted] = useState(false);

  const goNext = (dataObject)=>{
    if(currentStepIndex<2){
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
  return (
    <>
    <Uncontrolled_Form/>

    <Controlled_form/>

    <UncontrolledFlow>
      <StepOne/>
      <StepTwo/>
      <StepThree/>
    </UncontrolledFlow>

    <ControlledFlow data={data} currentStepIndex={currentStepIndex} formCompleted={formCompleted} goNext={goNext}>
      <StepOne/>
      <StepTwo/>
      {data?.Age < 25 ? <p>Sorry you can;t proceed further, your are under 25</p> : <StepThree/>}
    </ControlledFlow>
    </>
  );
}

export default App;
