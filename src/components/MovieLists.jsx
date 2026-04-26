

import React, { memo, useCallback, useEffect, useState } from "react";


const MovieCard = memo(({ title, openingText, releaseDate }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100 text-white" style={{ backgroundColor: "#46067e" }}>
                <div className="card-body">
                    <h3 className="card-title text-warning fw-bold">{title}</h3>
                    <p className="card-text">{openingText}</p>
                </div>
                <div className="card-footer">
                    <small>Release Date: {releaseDate}</small>
                </div>
            </div>
        </div>
    );
})

const MovieLists = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [cancel, setCancel] = useState(false);

    const fetchMovieHandler=async()=>{
        setLoading(true);
        setError(null);
        setCancel(false);
        try {
            const response = await fetch("https://swapi.info/api/films");
            if (!response.ok) {
                throw new Error("Something went wrong...Retrying");
            }
            const data = await response.json();
            const transformedMovies = data.map((movieData) => ({
                id: movieData.episode_id,
                title: movieData.title,
                openingText: movieData.opening_crawl,
                releaseDate: movieData.release_date,
            }));
            setMovies(transformedMovies);
        } catch (err) {
            setError(err.message || "Failed to fetch");

        }
        setLoading(false);
    }
    useEffect(() => {
        if (!error) return;
        if(cancel){
            setError(null);
            return;
        }

        let timeOut = setTimeout(() => {
            setMovies([]);
            fetchMovieHandler();
        }, 5000);
        return () => clearTimeout(timeOut);

    }, [error,cancel]);
    useEffect(()=>{
      fetchMovieHandler();
    },[])
    return (
        <div className="container mt-4">
            <section className="text-center mb-4">
                {error ? <button className="btn btn-dark" onClick={()=>setCancel(true)}>
                    Cancel
                </button> : <button className="btn btn-dark" onClick={fetchMovieHandler}>
                    Fetch Movies
                </button>}
            </section>

            <section>
                {loading && <p className="text-center">Loading...</p>}
                {error && <p className="text-danger text-center">{error}</p>}

                {!loading && !error && movies.length > 0 && (
                    <div className="row">
                        {movies.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                title={movie.title}
                                openingText={movie.openingText}
                                releaseDate={movie.releaseDate}
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