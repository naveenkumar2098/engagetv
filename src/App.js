import React, { useState ,useEffect} from 'react';
import { KEY } from './backend';
import Movie from './components/Movie';

const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${KEY}&page=1`;

const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${KEY}&query=`;

function App() {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    
    useEffect(() => {
        getMovies(FEATURED_API);
    }, []);

    const getMovies = (API) => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
              console.log(data)
                setMovies(data.results);
            });
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        
        if(searchTerm){
            getMovies(SEARCH_API + searchTerm)
            setSearchTerm("");
        }
        
    };

    const handleOnChange = (event) => {
        setSearchTerm(event.target.value);
    }
  
    return(
        <>
            <nav className="navbar sticky-top navbar-expand-lg " >
                <a className="navbar-brand" href="#">
                    <img className="d-inline-block align-top mr-3" width="100" height="100" alt="Logo" src="./logo_transparent.png" />
                </a>
            </nav>
            <div className="search-container">
                <form onSubmit={handleOnSubmit}>
                    <input 
                        className="search" 
                        type="search" 
                        placeholder="Search..." 
                        value={searchTerm}
                        onChange={handleOnChange}
                    />
                </form>
            </div>
            <div className="movie-container">
                { movies.length > 0 &&
                    movies.map((movie) => <Movie key={movie.id} {...movie} />
                )}
            </div>
        </>
    );  
}

export default App;
