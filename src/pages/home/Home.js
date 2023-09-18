import React, { useEffect, useState } from "react";
import "./Home.css";
import moment from "moment/moment";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

function Home() {
  const [movies, setMovies] = useState([]);
  const [latest, setLatest] = useState([]);
  const [popular, setPopular] = useState([]);

  ///trading///
  const [selectedItem, setSelectedItem] = useState("today");
  const [backgroundStyle, setBackgroundStyle] = useState({
    left: "0px",
    width: "81.5938px",
  });
  const handleItemClick = (item) => {
    setSelectedItem(item);
    if (item === "today") {
      setBackgroundStyle({
        left: "0px",
        width: "81.5938px",
      });
    }
    if (item === "this-week") {
      setBackgroundStyle({
        left: "79.5938px",
        width: "117.328px",
      });
    }
  };

  // /trading api//
  const fetchMovies = (timePeriod) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjEwNGVmMWY1MzBlNDg5MWMzZjQyMzEzNDU2MGQ4MyIsInN1YiI6IjY0ZWM3OWE4ZTg5NGE2MDBhZTc1NGU5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nz3tSIllbnd1yLVAQ84HL3Gx8BM15KXz42ea5H_tSFk",
      },
    };

    const apiUrl =
      timePeriod === "today"
        ? "https://api.themoviedb.org/3/trending/all/day?language=en-US"
        : "https://api.themoviedb.org/3/trending/all/week?language=en-US";

    fetch(apiUrl, options)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    fetchMovies(selectedItem);
  }, [selectedItem]);

  //  latest btn
  const [selectedTv, setSelectedTv] = useState("on-tv");
  const [backgroundTvStyle, setBackgroundTvStyle] = useState({
    left: "0px",
    width: "81.5938px",
  });

  const handleItemTv = (item) => {
    setSelectedTv(item);
    if (item === "on-tv") {
      setBackgroundTvStyle({
        left: "0px",
        width: "81.5938px",
      });
    }
    if (item === "in-theaters") {
      setBackgroundTvStyle({
        left: "88.594px",
        width: "115.328px",
      });
    }
  };
  //  popular btn
  const [selectedPop, setSelectedPop] = useState("on-tv");
  const [backgroundPopStyle, setBackgroundPopStyle] = useState({
    left: "0px",
    width: "81.5938px",
  });

  const handleItemPop = (item) => {
    setSelectedPop(item);
    if (item === "on-tv") {
      setBackgroundPopStyle({
        left: "0px",
        width: "81.5938px",
      });
    }
    if (item === "in-theaters") {
      setBackgroundPopStyle({
        left: "79.594px",
        width: "126.328px",
      });
    }
  };

  // trading api
  // useEffect(() => {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjEwNGVmMWY1MzBlNDg5MWMzZjQyMzEzNDU2MGQ4MyIsInN1YiI6IjY0ZWM3OWE4ZTg5NGE2MDBhZTc1NGU5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nz3tSIllbnd1yLVAQ84HL3Gx8BM15KXz42ea5H_tSFk",
  //     },
  //   };

  //   fetch(
  //     `https://api.themoviedb.org/3/trending/all/week?language=en-US`,
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then((response) => setMovies(response.results))
  //     .catch((err) => console.error(err));
  // }, []);
  console.log("trading", movies);

  ///latest api
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
      "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => setLatest(response.results))
      .catch((err) => console.error(err));
  }, []);
  console.log("latest", latest);
  // /popular api
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
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc",
      options
    )
      .then((response) => response.json())
      .then((response) => setPopular(response.results))
      .catch((err) => console.error(err));
  }, []);
  console.log("popular", popular);

  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(to right,  rgba(3, 37, 65, 0.8) 100%,
    rgba(3, 37, 65, 0) 100%), url(${
      "https://image.tmdb.org/t/p/original" + latest?.backdrop_path
    })`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div>
      <div className="movies-trading-container trading">
        <div className="trading-content">
          <div className="trading-header">
            <h2>Trading</h2>
            <div className="selector_wrap">
              <div className="selector">
                <div
                  className={`anchor ${
                    selectedItem === "today" ? "selected" : ""
                  }`}
                >
                  <h3>
                    <Link to="#" onClick={() => handleItemClick("today")}>
                      Today
                    </Link>
                  </h3>
                  <div className="background" style={backgroundStyle}></div>
                </div>
                <div
                  className={`anchor ${
                    selectedItem === "this-week" ? "selected" : ""
                  }`}
                >
                  <h3>
                    <Link to="#" onClick={() => handleItemClick("this-week")}>
                      This Week
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="trading_overflow">
            <div className="trading-section">
              {movies?.map((tred, index) => (
                <div className="trading-card" key={index}>
                  <Link to={`/movie/${tred.id}`} className="trading-img">
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w500" + tred?.poster_path
                      }
                      alt="imgas"
                    />
                  </Link>
                  <div className="trading-title" key={index}>
                    <div className="circular-homepage">
                      <CircularProgressbar
                        className="prognos"
                        value={tred?.vote_average?.toFixed()}
                        text={`${tred?.vote_average?.toFixed(1)}%`}
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
                    <Link to={`/movie/${tred.id}`}>
                      <p>{tred.name ? tred.name : tred.title}</p>
                    </Link>
                    <div>
                      <p>
                        {moment(
                          tred.first_air_date
                            ? tred.first_air_date
                            : tred.release_date
                        ).format("DD MMM YYYY")}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* ////latest version ///////// */}
      <div style={backgroundImageStyle} className="Latest-containe-url">
        <div className="latest-trailar-big">
          <div className="latest-content">
            <div className="latest-btn">
              <h4>Latest Trailers</h4>
              <div className="selector_wrap">
                <div className="selectortv">
                  <div
                    className={`anchortv ${
                      selectedTv === "on-tv" ? "selectedTv" : ""
                    }`}
                  >
                    <h3>
                      <Link to="#" onClick={() => handleItemTv("on-tv")}>
                        On-TV
                      </Link>
                    </h3>
                    <div
                      className="backgroundtv"
                      style={backgroundTvStyle}
                    ></div>
                  </div>
                  <div
                    className={`anchortv ${
                      selectedTv === "in-theaters" ? "selectedTv" : ""
                    }`}
                  >
                    <h3>
                      <Link to="#" onClick={() => handleItemTv("in-theaters")}>
                        In Theaters
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="latest-img-content">
              {latest?.map((lat, id) => (
                <div className="images_page">
                  <Link key={id}>
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w500" + lat?.backdrop_path
                      }
                      alt="img"
                    />
                  </Link>
                  <div className="latest-title">
                    <Link>{lat.name}</Link>
                    <p>{lat.overview.slice(0, 25)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* ///////////What Popular/// */}
      <div className="movies-trading-container trading">
        <div className="trading-content">
          <div className="trading-header">
            <h2>What's Popular </h2>
            <div className="selector_wrap">
              <div className="selector">
                <div
                  className={`anchor ${
                    selectedPop === "on-tv" ? "selected" : ""
                  }`}
                >
                  <h3>
                    <Link to="#" onClick={() => handleItemPop("on-tv")}>
                      On TV
                    </Link>
                  </h3>
                  <div className="background" style={backgroundPopStyle}></div>
                </div>
                <div
                  className={`anchor ${
                    selectedPop === "in-theaters" ? "selected" : ""
                  }`}
                >
                  <h3>
                    <Link to="#" onClick={() => handleItemPop("in-theaters")}>
                      In Theaters
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="trading_overflow">
            <div className="trading-section">
              {popular?.map((pop, index) => (
                <div className="trading-card" key={index}>
                  <Link to={`/movie/${pop.id}`} className="trading-img">
                    <img
                      src={"https://image.tmdb.org/t/p/w500" + pop?.poster_path}
                      alt="imgas"
                    />
                  </Link>
                  <div className="trading-title">
                    <Link to={`/movie/${pop.id}`}>
                      <p>{pop.name ? pop.name : pop.title}</p>
                    </Link>
                    <div>
                      <p>
                        {moment(
                          pop.first_air_date
                            ? pop.first_air_date
                            : pop.release_date
                        ).format("DD MMM  YYYY")}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
