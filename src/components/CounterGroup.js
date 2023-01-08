// rfce - shortcut for the component code structure 
import React from 'react';
import './CounterGroup.css';
import Counter from './Counter';

function CounterGroup(props) {

  let { globalCounterNum, globalCounterVal, resetGlobals } = props;
  return (
    <div>
      <h2>CounterGroup</h2>
      <div className='counter-group'>
        <Counter number={1}
          globalCounterNum={globalCounterNum}
          globalCounterVal={globalCounterVal}
          resetGlobals={resetGlobals}
        ></Counter>
        <Counter number={2}
          globalCounterNum={globalCounterNum}
          globalCounterVal={globalCounterVal}
          resetGlobals={resetGlobals}
        ></Counter>
        <Counter number={3}
          globalCounterNum={globalCounterNum}
          globalCounterVal={globalCounterVal}
          resetGlobals={resetGlobals}
        ></Counter>

      </div>

    </div>
  )
}

export default CounterGroup