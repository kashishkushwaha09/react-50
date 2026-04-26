

import React, { memo, useCallback, useEffect, useState } from "react";
import AddMovie from "./AddMovie";
import useMovies from "../hooks/useMovies";


const MovieCard = memo(({ id,title, openingText, releaseDate, onDelete }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100 text-white" style={{ backgroundColor: "#46067e" }}>
                <div className="card-body">
                    <h3 className="card-title text-warning fw-bold">{title}</h3>
                    <p className="card-text">{openingText}</p>
                </div>
                <div className="card-footer">
                    <small>Release Date: {releaseDate}</small>
                     <button
            className="btn btn-sm btn-danger"
            onClick={() => onDelete(id)}
          >
            Delete
          </button>
                </div>
            </div>
        </div>
    );
})

const MovieLists = () => {
     const { movies, loading, error, addMovie ,deleteMovie} = useMovies();
    
    return (
        <div className="container mt-4">
            <section>
                <AddMovie onAddMovie={addMovie} onDelete={deleteMovie}/>
            </section>
            {/* <section className="text-center mb-4">
                {error ? <button className="btn btn-dark" onClick={()=>setCancel(true)}>
                    Cancel
                </button> : <button className="btn btn-dark" onClick={fetchMovieHandler}>
                    Fetch Movies
                </button>}
            </section> */}

            <section>
                {loading && <p className="text-center">Loading...</p>}
                {error && <p className="text-danger text-center">{error}</p>}

                {!loading && !error && movies.length > 0 && (
                    <div className="row mt-3">
                        {movies.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                openingText={movie.openingText}
                                releaseDate={movie.releaseDate}
                                onDelete={deleteMovie}
                            />
                        ))}
                    </div>
                )}

                {!loading && !error && movies.length === 0 && (
                    <p className="text-center">No movies found</p>
                )}
            </section>
        </div>
    );
};

export default MovieLists;