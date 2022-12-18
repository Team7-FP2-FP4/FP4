import React from "react";
import '../App.css';

const Movie = (props) => {
    return (
        <>
            {props.movies.map((movie, index) => (
                <div className="flex justify-center my-1 px-2 w-full md:w-1/2 lg:my-4 lg:px-9 lg:w-1/4">
                    <div class="text-left w-72 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <img class="rounded-t-lg" src={movie.Poster} width="286" alt="" />
                        <div class="p-5">
                            <h5 class="font-karla mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.Title}</h5>
                            <p class="font-inter mb-3 font-normal text-gray-700 dark:text-gray-400">Year: {movie.Year}</p>
                            <p class="font-inter mb-3 font-normal text-gray-700 dark:text-gray-400">Type: {movie.Type}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Movie;
