import React from 'react'

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
    if(vote >= 8){
        return "green";
    }else if(vote >= 6){
        return "orange";
    }else{
        return "red";
    }
};

const Movie = ({overview, title, poster_path, vote_average}) => (
    <div className="movie">
        <img src={poster_path ? 
            IMG_API + poster_path
            : "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            } alt={title} 
        />
        <div className="movie-info">
            <h3>{title}</h3>
            <span className={`tag ${setVoteClass(vote_average)}`} >{vote_average}</span>
        </div>
        <div className="movie-hover">
            <h2>Overview:</h2>
            <p>{overview}</p>
        </div>
    </div>
);

export default Movie;
