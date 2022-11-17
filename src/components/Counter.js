import { useState } from "react";
import {useSelector , useDispatch} from "react-redux"
import { counterActions } from "../store";
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter.counter)
  const show = useSelector(state => state.counter.status)
  const dispatch = useDispatch()
  // const [countingStatus , setCountingStatus] = useState(false)

  const toggleCounterHandler = () => {
    dispatch(counterActions.status())
  };


  console.log(show)
  
  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }

  const increaceHandler = () => {
    dispatch(counterActions.increace(5))
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{show ? counter : "tapp start button"}</div>
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaceHandler}>Increase to 5</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>{show ? "Finish Counting" : "Start Counting"}</button>
    </main>
  );
};

export default Counter;
