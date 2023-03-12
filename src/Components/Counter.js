import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  decrement,
  increment,
  incrementByAmount,
} from "../reducers/counterSlice";

export default function Counter() {
  // const [count, setCount] = useState(0);
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
    // (incrementActions(dispatch));
  };
  const handleDecrement = () => {
    dispatch(decrement());
    // (decrementActions(dispatch));
  };
  const handleIncByValue = (vl) => {
    dispatch(incrementByAmount(vl));
    // (incrementByValue(vl, dispatch))
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={() => handleIncByValue(3)}>INC By 3</button>
    </div>
  );
}
