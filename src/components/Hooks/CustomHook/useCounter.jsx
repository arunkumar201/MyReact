import React from 'react'
const useCounter = (InitialValue) => {
  const [Value, setValue]=React.useState(InitialValue);
  let Increment=()=>{
  
    setValue(Value+1);
  }
   let Decrement = () => {
     setValue(Value-1);
   };
   
      let Reset = () => {
     setValue(0);
   };
  return ([Value,Increment,Decrement,Reset])
}
export default useCounter
