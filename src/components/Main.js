import React from 'react'
import Genere from './Genere'
import Movies from './Movies'

function Main() {

  const [cGenre, setGenre] = React.useState("");
  const [cPage, setcPage] = React.useState(1);

  const setGlobalGenre = (nGenre) => {
    if (nGenre == "All Genere") {
      setGenre("");
    } else {
      setGenre(nGenre);
    }
    setcPage(1);

  }

  return (
    <>
      <div>----------------Main---------------------</div>
      <div className='flex'>
        <Genere setGlobalGenre={setGlobalGenre}></Genere>
        <Movies
          cGenre={cGenre}
          cPage={cPage}
          setcPage={setcPage}
        ></Movies>

      </div>
    </>

  )
}

export default Main