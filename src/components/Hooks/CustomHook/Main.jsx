/* eslint-disable no-undef */
import React from 'react'
import useCounter from './useCounter.jsx'

const Main=() => {
  const [Value, Increment, Decrement,Reset]=useCounter(0);
  let IncrementHandler=()=>{
    Increment(Value+1);
  }
    let DecrementHandler = () => {
      Decrement(Value - 1);
    };
   let ResetHandler = () => {
        Reset(0);
      };
 return (
   <>
     <div style={{
       textAlign: 'center', fontSize: '2rem', color:'purple',padding:'2rem'}}>
       <button onClick={IncrementHandler}>Increment</button>
       <h1>{Value}</h1>
       <button onClick={DecrementHandler}>Decrement</button>
       <hr style={{width:'40%'}} />
       <button onClick={ResetHandler}>Reset</button>
     </div>
   </>
 );
}
export default Main
