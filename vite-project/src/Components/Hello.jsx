import { useState } from "react"

export default function Hello() {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrease] = useState(1);
  function increaseBy() {
    setCount (count + incrementBy);
  }
  function decreaseBy() {
    setCount (count - incrementBy);
  }
  function Increase() {
    setIncrease(incrementBy + 1);
  }
  function Decrease() {
    setIncrease(incrementBy -1);
  }
  return(
    <div>
      <h1>The value of the count is: {count}</h1>
      <button onClick={increaseBy}>increase</button>
      <button onClick={decreaseBy}>decrease</button>

      <h2>The value increased by:{incrementBy}</h2>
      <button onClick={Increase}>increment</button>
      <button onClick={Decrease}>decrement</button>

    </div>
  )
}