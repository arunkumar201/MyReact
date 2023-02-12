import React from 'react'
import { useEffect,useState} from "react";

const CallBackChild =React.memo(({DisplayMsg}) => {
	const [Message, setMessage]=useState('');
	useEffect(() => {
		setMessage(DisplayMsg());
		console.log("Child Component rendered");
	}, [DisplayMsg]);
	return (
  <>
  <h1>Message from the Parent is {Message} </h1> 
  </>
  )
})

export default CallBackChild
