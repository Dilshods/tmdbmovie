import React from "react";
import "./Similar.css";
function Similar({ similar, id }) {
  return (
    <>
      <div className="movie-card" key={id}>
        <div className="movie-image">
          <img
            src={"https://image.tmdb.org/t/p/w500" + similar?.poster_path}
            alt="img"
          />
          <div className="options" data-media-type="movie" data-role="tooltip">
            <a className="no_click" href="#">
              <div className="glyphicons_v2 circle-more white"></div>
            </a>
          </div>
        </div>
        <div className="movie-content">
          <div className="consensus"></div>
          <h2>
            <a href="#">{similar?.title}</a>
            <p>{similar?.release_date}</p>
          </h2>
        </div>
      </div>
    </>
  );
}

export default Similar;
