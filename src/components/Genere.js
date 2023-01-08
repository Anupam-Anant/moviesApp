// rfce 
import React from 'react'
import { useEffect } from 'react'

// const express = require("express");
// const app = express();
// const cors = require('cors');

function Genere(props) {

  let [isLoaded, setLoaded] = React.useState(true);
  let [content, setContent] = React.useState([]);
  const sendGenre = (e) => {
    console.log("genre : " + e.target.textContent);
    props.setGlobalGenre(e.target.textContent);
  }

  // useffect will run only one time after execution of return statement 
  useEffect(async function () {
    // fetch is inbuit feature of browser that makes the request to get data -> promise based
    // let response = await fetch('http://react-backend101.herokuapp.com/genres');
    // response = await response.json();

    let response = `{"genres": [
{"_id" :"Sb21ca3eeb7F6fbccd471818", "name": "Action"},
{"_id": "Sb21ca3eeb7f6fbecd471814", "name": "Comedy"}, 
{"_id": "Sb21ca3eeb76fbccd471820", "name": "Thriller"}
]}`;

    response = await JSON.parse(response);
    console.log("Response from URL : " + response);
    setLoaded(false);
    setContent(response);
  }, [])

  return (
    <div className='Genere'>
      <div className="mr-6 border-2 w-40 text-center h-10 font-bold" onClick={sendGenre}>All Genere</div>
      <div>{isLoaded == true ? <div className='font-bold'>Loading...</div> :
        <div>
          {content.genres.map(function (genre) {
            return (
              <div key={genre._id} className="mr-6 border-2 w-40 text-center h-10 border-t-0 font-bold"
                onClick={sendGenre}
              >
                {genre.name}</div>
            )
          })}
        </div>
      }
      </div>
      {/* <div className="mr-6 border-2 w-40 text-center h-10 border-t-0 font-bold">Action</div>
      <div className="mr-6 border-2 w-40 text-center h-10 border-t-0 font-bold">Comedy</div>
      <div className="mr-6 border-2 w-40 text-center h-10 border-t-0 font-bold">Thriller</div> */}

    </div>
  )
}

export default Genere