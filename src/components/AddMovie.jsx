import React, { memo, useState } from "react";

const AddMovie = ({ onAddMovie }) => {
  const [title, setTitle] = useState("");
  const [openingText, setOpeningText] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const movieData = {
      id: Math.random().toString(),
      title,
      openingText,
      releaseDate,
    };

    onAddMovie(movieData);

    setTitle("");
    setOpeningText("");
    setReleaseDate("");
  };

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow-sm">
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Title</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Opening Text</label>
            <textarea
              className="form-control"
              rows="4"
              value={openingText}
              onChange={(e) => setOpeningText(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Release Date</label>
            <input
              type="date"
              className="form-control"
              value={releaseDate}
              onChange={(e) => setReleaseDate(e.target.value)}
              required
            />
          </div>

          <div className="text-center">
            <button
              className="btn text-white px-4"
              style={{ backgroundColor: "#46067e" }}
            >
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default memo(AddMovie);