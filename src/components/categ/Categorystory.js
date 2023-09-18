import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "./Categorystory.css";

function Categorystory({ play, index }) {
  return (
    <>
      <div className="catebox" key={index}>
        <div className="catimage">
          <Link to={`/movie/${play.id}`}>
            <img
              src={"https://image.tmdb.org/t/p/w500" + play?.poster_path}
              alt="img"
            />
          </Link>
        </div>
        <div className="cattitle">
          <div className="progresbar">
            <CircularProgressbar
              className="prognos"
              value={play.vote_average}
              text={`${play?.vote_average}%`}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#081c22",
                textColor: "#fff",
                pathColor: "#50e60f",
                trailColor: "transparent",
              })}
            />
          </div>
          <p>
            <Link to={`/movie/${play.id}`}>
              {play.name ? play.name : play.title}
            </Link>
          </p>
          <p>{play.first_air_date ? play.first_air_date : play.release_date}</p>
        </div>
      </div>
    </>
  );
}

export default Categorystory;
