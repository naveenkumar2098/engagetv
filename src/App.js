import React, { useState ,useEffect} from 'react';
import { KEY } from './backend';
import Movie from './components/Movie';

const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${KEY}&page=1`;

const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${KEY}&query=`;

function App() {

    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        fetch(FEATURED_API)
            .then((res) => res.json())
            .then((data) => {
              console.log(data)
                setMovies(data.results);
            });
    }, []);
  
    return(
        <div className="movie-container">
            { movies.length > 0 &&
                movies.map((movie) => <Movie key={movie.id} {...movie} />
            )}
        </div>
    );  
}

export default App;
