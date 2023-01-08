// rfce
import React from 'react'
import InputBox from './InputBox'
import MoviesTable from './MoviesTable'
import Pagination from './Pagination'
import { useEffect } from 'react'

function Movies(props) {

    let [searchText, setSearchText] = React.useState("");
    let [moviesCount, setCount] = React.useState(4);
    let [content, setContent] = React.useState([]);
    let [isLoaded, setLoaded] = React.useState(true);
  
    let { cPage, setcPage }=props;
    useEffect(function () {
        // fetch is inbuit feature of browser that makes the request to get data -> promise based
        // let response = await fetch('http://react-backend101.herokuapp.com/movies');
        // response = await response.json();
        // console.log(response);

        let response = `{
    "movies": [
        {
            "_id": "562lcaSeeh7f6fbccd471815",
            "title": "Terminator",
            "genre": {
                "_id": "5621caSeeb7f6fbccd471818",
                "name": "Action"
            },
            "numberInStock": 6,
            "dailyRentalRate": 2.5
        },
        {
            "_id": "5621caSeeb7f6fbccd471816",
            "title": "Die Hard",
            "genre": {
                "_id": "Sb2lca3geb7f6fbcc4A71818",
                "name": "Action"
            },
            "numberInStock": 5,
            "dailyRentalRate": 2
        },
        {
            "_id": "5621ca3eeb7f6fb«d471817",
            "title": "Get Out",
            "genre": {
                "_id": "5621caSeeb7f6fbccdA71820",
                "name": "Thriller"
            },
            "numberInStock": 8,
            "dailyRentalRate": 3.5
        },
        {
            "id": "5b2lca3eeb716fbccd471819",
            "title": "Trip to Italy",
            "genre": {
                "id": "5621ca3eeb7f6fbcc4471814",
                "name": "Comedy"
            },
            "numberInStock": 7,
            "dailyRentalRate": 3.5
        },
        {
            "_id": "5621ca3eeb7f6fbccdA7181a",
            "title": "Airplane",
            "genre": {
                "id": "5621ca3eeb7f6fbcc4471814",
                "name": "Comedy"
            },
            "numberInStock": 7,
            "dailyRentalRate": 3.5
        },
        {
            "_id": "5621ca3eeb7f6fbccdA71816",
            "title": "Wedding Crashers",
            "genre": {
                "_id": "5621ce3eeb7f6fbccdA71814",
                "name": "Comedy"
            },
            "numberInStock": 7,
            "dailyRentalRate": 3.5
        },
        {
            "_id": "Sb2lca3eeb7f6fbccdA7181e",
            "title": "Gone Girl",
            "genre": {
                "_id": "5621caSeeb7f6fbccd471820",
                "name": "Thriller"
            },
            "numberInStock": 7,
            "dailyRentalRate": 4.5
        },
        {
            "_id": "SbncaSeeb7f6fbccdA7181f",
            "title": "The Sixth Sense",
            "genre": {
                "_id": "5621caSeeb7f6fbccd471820",
                "name": "Thriller"
            },
            "numberInStock": 4,
            "dailyRentalRate": 3.5
        },
        {
            "_id": "5b2lca3eeb7f6fbccdA71821",
            "title": "The Avengers",
            "genre": {
                "_id": "Sb2lca3eeb7f6fbccd471818",
                "name": "Action"
            },
            "numberInStock": 7,
            "dailyRentalRate": 3.5
        }
    ]
}`;
        response = JSON.parse(response);
        console.log("Movies.js length of movies array ", response.movies.length);
        // let moviesLength = response.movies.length;
        // setMoviesLength(response.movies.length);
        setLoaded(false);
        setContent(response);
    }, [])
// **************************************************************
// **************************************************************
    const setGlobalSearchText = (searchText) => {
        setSearchText(searchText);
        setcPage(1);
    }

    const setGlobalcount = (moviesCount) => {
        // console.log('searchCount in movies : ', moviesCount);
        setCount(moviesCount);
        setcPage(1);
    }
    

    return (
        <div>
            {/* <div>++++++++Movies++++++++++++++</div> */}
            <InputBox setGlobalSearchText={setGlobalSearchText}
                setGlobalcount={setGlobalcount}
            ></InputBox>
            <MoviesTable searchText={searchText}
                moviesCount={moviesCount}
                cGenre={props.cGenre}
                content={content}
                isLoaded={isLoaded}
                setContent={setContent}
                cPage={cPage}
            ></MoviesTable>
            <Pagination
                moviesCount={moviesCount}
                content={content}
                cPage={cPage}
                setcPage={setcPage}
            ></Pagination>
        </div>
    )
}

export default Movies;

