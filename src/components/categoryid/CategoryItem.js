import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CategoryItem.css";
import { RiMenuAddFill } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegBookmark } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Similar from "./similar/Similar";
import Modal from "../modal/BasicModal";
import { Tooltip } from "@mantine/core";
import CategoryModal from "./CategoryModal";

function CategoryItem() {
  const { id } = useParams();
  const [movieData, setMovieData] = useState([]);
  const [trailer, setTrailer] = useState(null);
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjEwNGVmMWY1MzBlNDg5MWMzZjQyMzEzNDU2MGQ4MyIsInN1YiI6IjY0ZWM3OWE4ZTg5NGE2MDBhZTc1NGU5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nz3tSIllbnd1yLVAQ84HL3Gx8BM15KXz42ea5H_tSFk",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=8f104ef1f530e4891c3f423134560d83`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setSimilar(response.results);
      })
      .catch((err) => console.error(err));
  }, [id]);
  console.log("similar", similar);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?&append_to_response=videos&api_key=8f104ef1f530e4891c3f423134560d83`
      )
      .then((response) => {
        setMovieData(response.data);
        const trailerid = response.data.videos.results.find(
          (vid) => vid.name === "Official Trailer"
        );
        setTrailer(trailerid ? trailerid : response.data.videos.results[0]);
      })
      .catch(function (error) {
        console.error("Error fetching data:", error);
      });
  };
  console.log(movieData);
  console.log("traeler", trailer);

  return (
    <>
      <div
        key={id}
        className="card"
        style={{
          backgroundImage: `url(${
            "https://image.tmdb.org/t/p/original" + movieData?.backdrop_path ||
            movieData?.poster_path
          })`,
        }}
      >
        <div className="card-img-title">
          <div className="img-tmdb">
            <div className="image-tmdb poster">
              <div className="image_content">
                <img
                  className="poster"
                  src={`https://image.tmdb.org/t/p/original${movieData?.poster_path}`}
                  alt="tmdb-img"
                />
              </div>
              <div className="expend">
                <Modal date={movieData} />
              </div>
            </div>
          </div>
          <div className="title-tmdb">
            <div className="header-content-title">
              <div className="tmdb-header-title">
                <h5>
                  <Link>{movieData?.title}</Link>
                  <span>({movieData?.release_date})</span>
                </h5>
              </div>
              <div className="facts">
                {movieData?.genres?.map((k, i) => (
                  <span
                    key={i}
                    style={{ marginRight: "20px" }}
                    className="genres"
                  >
                    {k?.name}
                  </span>
                ))}
              </div>
              <div className="logo-page">
                <ul
                  className="auto actions"
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <li className="chart">
                    <div
                      style={{
                        width: 68,
                        height: 68,
                        marginRight: "10px",
                      }}
                    >
                      <CircularProgressbar
                        className="prognos"
                        value={movieData?.vote_average?.toFixed(1)}
                        text={`${movieData?.vote_average?.toFixed(1)}%`}
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
                    <div className="text">
                      User
                      <br />
                      Score
                    </div>
                  </li>
                  <li>
                    <Tooltip
                      label="Add to list..."
                      color="dark"
                      position="bottom"
                      withArrow
                      arrowPosition="center"
                    >
                      <button
                        className="tooltip-child"
                        variant="outline"
                        size="xl"
                      >
                        <RiMenuAddFill />
                      </button>
                    </Tooltip>
                  </li>
                  <li>
                    <Tooltip
                      label="Mark as favorite"
                      color="dark"
                      position="bottom"
                      withArrow
                      arrowPosition="center"
                    >
                      <button
                        className="tooltip-child"
                        variant="outline"
                        size="xl"
                      >
                        <AiOutlineHeart />
                      </button>
                    </Tooltip>
                  </li>
                  <li>
                    <Tooltip
                      label="Mark as favorite"
                      color="dark"
                      position="bottom"
                      withArrow
                      arrowPosition="center"
                    >
                      <button
                        className="tooltip-child"
                        variant="outline"
                        size="xl"
                      >
                        <FaRegBookmark />
                      </button>
                    </Tooltip>
                  </li>
                  <li className="video none  ">
                    <CategoryModal item={trailer} key={id} />
                    {/* <a>{trailer?.name}</a> */}
                  </li>
                </ul>
              </div>
              <p>Status: {movieData?.status}</p>
              <p>{movieData?.overview}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="similar">
        <h1>Similar movies</h1>
        <div className="moviesimilar">
          {similar.map((k, id) => (
            <Link to={`/movie/${k.id}`}>
              <Similar similar={k} key={id} />
            </Link>
          ))}
        </div>
      </div>{" "}
    </>
  );
}

export default CategoryItem;
