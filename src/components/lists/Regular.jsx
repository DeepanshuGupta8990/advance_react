import React from 'react'

export default function RegularList({items,sourceName,ItemComponent}) {
  return (
    <>
     {items.map((item,i)=>{
        return(
          <>
            <ItemComponent key={i} {...{[sourceName]:item}}/>
            {
                (i+1)!==items.length && <hr />
            }
          </>
        )
     })} 
    </>
  )
}
