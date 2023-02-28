import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../../../React-Basics/src/Redux/ReducerCounter';

 let store=() =>{
return (configureStore({
	reducer: {
		counter: counterReducer,
	},
}));
}
export default store
