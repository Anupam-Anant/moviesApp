import React from 'react';
import './CounterGroup.css';

function Counter(props) {
    let [count, changeCount] = React.useState(0);
    let { globalCounterNum, globalCounterVal, resetGlobals } = props;
    let number = props.number;

    if (number == globalCounterNum && globalCounterVal != count){
        // console.log("I should change : "+number);
        changeCount(globalCounterVal);

        // reset globalCounterNum and globalCounterVal
        resetGlobals();
    }

    let increment = () =>{
        changeCount(Number(count) + 1);
    }
    let decrement = () =>{
        changeCount(Number(count) -1);
    }

  return (
    <div className='counter'>
        <h3>Counter Number {number}</h3>
          <button onClick={increment}>+</button>
          <p>Count : {count}</p>
          <button onClick={decrement}>-</button>
    </div>
  )
}
export default Counter;