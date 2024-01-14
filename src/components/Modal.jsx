import React, { useState } from 'react'
import { styled } from 'styled-components';

export default function Modal({children}) {
    const [show,setShow] = useState(false);
  return (
   <>
   <button onClick={()=>{setShow(true);}}>Show Modal</button>
   {
     show &&   
     <ModalBackground onClick={()=>{setShow(false);}}>
     <ModalContent onClick={(e)=>{e.stopPropagation();}}>
     <button onClick={()=>{setShow(false);}}>Hide Modal</button>
       {children}
     </ModalContent>
   </ModalBackground>
   }
   </>
  )
}


const ModalBackground = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background-color: #1717176f;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalContent = styled.div`
    width: 30vw;
    background-color: #cea65c;
    border-radius: 6px;
    padding: 10px;
`