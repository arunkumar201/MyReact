/** @format */

//global state => action => dispatch(action)=> reducerFunction=> finally he Update the state
const redux = require("redux");

const createStore = redux.createStore;

//Defines the actions
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

let IncrementCounter = () => {
  return {
    type: INCREMENT,
  };
};
let DecrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

const InitialState = {
  count: 0,
};

let counterReducer = (state = InitialState, action) => {
  console.log("CounterReducer function is called");
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};
// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counterReducer);
// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// There may be additional use cases where it's helpful to subscribe as well.
let unsubscribe = store.subscribe(() => console.log(store.getState()));

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch(IncrementCounter()); //1
store.dispatch(DecrementCounter()); //0
store.dispatch(IncrementCounter()); //1
store.dispatch(IncrementCounter()); //2
store.dispatch(DecrementCounter()); //1
store.dispatch(IncrementCounter()); //2
store.unSubscribe()
