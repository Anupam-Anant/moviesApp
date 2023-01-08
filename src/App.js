import logo from './logo.svg';
import './App.css';
import Reset from './components/Reset';
import CounterGroup from './components/CounterGroup';
import React from 'react';

function App() {

  let [globalCounterNum, setGlobalCounterNum] = React.useState("");
  let [globalCounterVal, setGlobalCounterVal] = React.useState("");

  function getResetData(countNumber, countVal) {
    console.log("Parent : "+countNumber + " : CountVal : "+ countVal);
    setGlobalCounterNum(countNumber);
    setGlobalCounterVal(countVal);
  }

  function resetGlobals(){
    setGlobalCounterNum("");
    setGlobalCounterVal("");
  }

  return (
    <>
      <Reset getResetData={getResetData}></Reset>
      <CounterGroup 
        globalCounterNum={globalCounterNum}
        globalCounterVal={globalCounterVal}
        resetGlobals={resetGlobals}
      ></CounterGroup>
    </>
  );
}

export default App;
