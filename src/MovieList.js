import React from "react";
import { useContext } from "react";
import { MovieContext } from "./MovieContext";
import Movie from './Movie';

// Creating a movie list
// Movies  is a variable with the movies data either from an array or from a fetched API.
// Setmovies however is a function that that updates movies state variable whenever its called with a new value.
const MovieList = () => {
    const [movies]= useContext (MovieContext);
   
    return (
        <div>
           
                {movies.map((movie) => (
                <Movie
                    name={movie.name}
                    price={movie.price}
                    key={movie.id}
                />

            ))}  
 
        </div>

    );
}





export default MovieList;