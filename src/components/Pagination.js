import React from 'react'

function Pagination(props) {

  let { moviesCount, content, cPage, setcPage } = props;
  // total movies , // no of movies in single page
  let pagesArr = [];
  if (content.movies && moviesCount != 0) {
    // let noOfPages = Math.ceil(moviesLength / moviesCount);
    let noOfPages = Math.ceil(content.movies.length / moviesCount);
    for (let i = 1; i <= noOfPages; i++) {
      pagesArr.push(i);
    }
  }
  // console.log("movies length = ", content.movies.length);

  return (
    // <div>
    //   <button className='bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded' >1</button>
    //   <button className='hover:bg-blue-500 py-1 px-2 rounded border-2'>2</button>
    //   <button className='hover:bg-blue-500 py-1 px-2 rounded border-2' >3</button>
    //   </div>
    <>
      {pagesArr.map(function (pageNumber) {
        let css = cPage == pageNumber ? 'hover:bg-blue-500 py-1 px-2 rounded border-2 bg-blue-700 text-white' : 'hover:bg-blue-500 py-1 px-2 rounded border-2';
        return (<button className={css}
          onClick={() => {
            setcPage(pageNumber)
          }}
        >{pageNumber}</button>)

      })}
    </>
  )
}

export default Pagination;