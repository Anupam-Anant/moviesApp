import React from 'react'
import { Link } from 'react-router-dom';

function InputBox(props) {
  let [searchText, setSearchText] = React.useState("");
  let [numberOfItems, setNumberOfItems] = React.useState(4);

  const handleText = (e) => {
    // change in local UI
    setSearchText(e.target.value);
    // sends to parent 
    props.setGlobalSearchText(e.target.value);
  }

  const handleCount = (e) => {
    setNumberOfItems(e.target.value);
    props.setGlobalcount(e.target.value);
  }



  return (
    <>
      {/* <div>InputBox</div> */}
      <Link to='/new'>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>New</button>
      </Link>
      <input className='shadow border rounded mx-2 py-1 px-1 font-bold' type="text" value={searchText} onChange={handleText}></input>
      <input className='shadow border rounded mx-2 py-1 px-1 font-bold' type="number" value={numberOfItems} onChange={handleCount}></input>

    </>
  )
}

export default InputBox