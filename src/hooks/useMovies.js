import { useState, useEffect, useCallback } from "react";

const BASE_URL = "https://movie-b008a-default-rtdb.firebaseio.com/movies";

const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
// const [cancel, setCancel] = useState(false);
  const fetchMovies = useCallback(async () => {
    setLoading(true);
    setError(null);
    //   setCancel(false);
    try {
      const response = await fetch(`${BASE_URL}.json`);

      if (!response.ok) {
        throw new Error("Something went wrong...Retrying");
      }

      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadedMovies);
    } catch (err) {
      setError(err.message || "Failed to fetch");
    }

    setLoading(false);
  }, []);

  const addMovie = useCallback(async (movie) => {
    try {
      const response = await fetch(`${BASE_URL}.json`, {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to add movie");
      }

      fetchMovies();
    } catch (err) {
      setError(err.message);
    }
  }, [fetchMovies]);
const deleteMovie = useCallback(async (id) => {
  try {
    const response = await fetch(
      `${BASE_URL}/${id}.json`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete movie");
    }

    setMovies((prev) => prev.filter((movie) => movie.id !== id));
  } catch (err) {
    setError(err.message);
  }
}, []);
  const cancelRetry = useCallback(() => {
    setError(null);
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

//   useEffect(() => {
//     if (!error) return;

//     const timer = setTimeout(() => {
//       fetchMovies();
//     }, 5000);

//     return () => clearTimeout(timer);
//   }, [error, fetchMovies]);

  return {
    movies,
    loading,
    error,
    fetchMovies,
    addMovie,
    deleteMovie
    // cancelRetry,
  };
};

export default useMovies;