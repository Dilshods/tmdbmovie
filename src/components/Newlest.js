import React, { useEffect, useState } from "react";
import "./Newlest.css";
function Newlest() {
  const [backgroundImages, setBackgroundImages] = useState([]);
  const [currentBackground, setCurrentBackground] = useState("");
  // const [movieSoarch, setMovieSoarch] = useState([]);
  // const [value, setValue] = useState("");

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
      .then((response) => setBackgroundImages(response.results))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (backgroundImages.length > 0) {
      const randomIndex = Math.floor(Math.random() * backgroundImages.length);
      setCurrentBackground(backgroundImages[randomIndex]);
    }
  }, [backgroundImages]);

  // useEffect((value) => {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjEwNGVmMWY1MzBlNDg5MWMzZjQyMzEzNDU2MGQ4MyIsInN1YiI6IjY0ZWM3OWE4ZTg5NGE2MDBhZTc1NGU5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nz3tSIllbnd1yLVAQ84HL3Gx8BM15KXz42ea5H_tSFk",
  //     },
  //   };

  //   fetch(
  //     `https://api.themoviedb.org/3/search/movie?query=${value}&api_key=8f104ef1f530e4891c3f423134560d83`,
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then((response) => setMovieSoarch(response.results))
  //     .catch((err) => console.error(err));
  // }, []);

  // console.log("value", value);
  // console.log("movieSoarch", movieSoarch);

  return (
    <>
      <section
        style={{
          backgroundImage: `linear-gradient(
        to right,
        rgba(3, 37, 65, 0.8) 0%,
        rgba(3, 37, 65, 0) 100%
      ), url(
        "https://image.tmdb.org/t/p/original${currentBackground?.backdrop_path}"
      )`,
        }}
        className="img-container"
      >
        <div className="content_wrapper wrap">
          <div className="title">
            <p>Xush Kelibsiz</p>
            <p>Jahon kinolar serial kurish uchun</p>
          </div>
          <div className="search">
            <form className="inner_search_form">
              <label className="writting_input">
                <input
                  // onChange={(e) => setValue(e.target.value)}
                  type="search"
                  placeholder="Kinolar olamiga sayohat ......"
                />
              </label>
              <button className="inputbutton">Search</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Newlest;
