import React from 'react'


function MoviesTable(props) {

    let { content, isLoaded, setContent, cPage } = props;
    // useffect will run only one time after execution of return statement 

    console.log("Movies Table : ", props.searchText);
    console.log("moviesCount : ", props.moviesCount);

    const deleteMovie = (toBeDeletedMovieId) => {
        let restOfTheMovies = content.movies.filter((movie) => {
            return movie._id !== toBeDeletedMovieId;
        });
        let newObject = { movies: restOfTheMovies };
        console.log("newObject : " + newObject.movies);
        setContent(newObject);
    }
    let filteredContent = [];

    if (content.movies) {
        filteredContent = content.movies;

        // ****************searching*************
        if (props.searchText != "") {
            filteredContent = content.movies.filter((movie) => {
                let lowerCaseTitle = movie.title.toLowerCase();
                let lowercaseSearchText = props.searchText.toLowerCase();
                // includes -> for checking in lowerCaseTitle string
                return lowerCaseTitle.includes(lowercaseSearchText);
            }
            );
        }

        //**************** */ set genre logic ****************** - grouping
        if (props.cGenre) {
            filteredContent = filteredContent.filter(
                (movie) => {
                    return movie.genre.name.trim() == props.cGenre.trim();
                }
            )
        }

        //  *************number of elements logic(pagination)***********
        let sidx = (cPage-1)*props.moviesCount;
        let eidx = sidx + props.moviesCount;
        // filteredContent = filteredContent.slice(0, props.moviesCount);
        filteredContent = filteredContent.slice(sidx, eidx);



    }

    return (
        <div>{isLoaded == true ? <div className='font-bold'>Loading...</div> :
            <table className='table-auto'>
                <thead>
                    <tr>
                        <th className='px-2'>#</th>
                        <th className='px-2'>Title</th>
                        <th className='px-2'>Genre</th>
                        <th className='px-2'>Stock</th>
                        <th className='px-2'>Rate</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {filteredContent.map(function (movie, idx) {
                        return (
                            <tr key={movie._id}>

                                <td className='px-2 text-center'>{idx + 1}</td>
                                <td className='px-2 text-center'>{movie.title}</td>
                                <td className='px-2 text-center'>{movie.genre.name}</td>
                                <td className='px-2 text-center'>{movie.numberInStock}</td>
                                <td className='px-2 text-center'>{movie.dailyRentalRate}</td>
                                <td><button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                                    onClick={() => {
                                        deleteMovie(movie._id);
                                    }}>Delete</button></td>

                            </tr>)
                    })}
                </tbody>
            </table>
        }
        </div>
    )
}

export default MoviesTable