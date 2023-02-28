import React,{useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from "./ReducerCounter";


export const CounterUser = () => {
	  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  return (
	<div>
      <div>
        <button
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span>{count}</span>
        <button
          className="UserAmount"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div >
        <input
          className='UserAmount'
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          className="UserDefinedAmount"
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        ></button>
	</div>
	</div>
	
  )
}
