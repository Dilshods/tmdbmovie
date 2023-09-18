import React, { useEffect, useState } from "react";
import "./Tinto.css";
import { Link } from "react-router-dom";
import { Pagination } from "@mantine/core";

function Tinto() {
  const [popular, setPopular] = useState([]);
  const [pagination, setPagination] = useState(1);

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
      `https://api.themoviedb.org/3/person/popular?language=en-US&page=${pagination}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setPopular([...response.results]);
      })
      .catch((err) => console.error(err));
  }, [pagination]);

  const handlePageClick = (prevpage) => {
    setPagination(prevpage + 1);
  };

  console.log(popular);
  return (
    <>
      <div>
        <div className="title">
          <h4>Popular People</h4>
        </div>
        <div className="tinto-box">
          {popular.map((pop, id) => (
            <div className="tinto-img" key={id}>
              <div className="image">
                <Link to={`/person/${pop.id}`}>
                  <img
                    src={"https://image.tmdb.org/t/p/w500" + pop?.profile_path}
                    alt="popular"
                  />
                </Link>
              </div>
              <div className="tinto-title">
                <h2>
                  <Link to={`/person/${pop.id}`}>{pop.name}</Link>
                </h2>
                <p>{pop.known_for_department}</p>
              </div>
            </div>
          ))}
        </div>
        <Pagination
          total={499}
          position="center"
          onChange={handlePageClick}
          styles={(theme) => ({
            control: {
              "&[data-active]": {
                backgroundImage: theme.fn.gradient({
                  from: "red",
                  to: "yellow",
                }),
                border: 0,
              },
            },
          })}
        />
      </div>
    </>
  );
}

export default Tinto;
