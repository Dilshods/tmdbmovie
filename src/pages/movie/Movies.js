import React, { useEffect, useState } from "react";
import "./Movies.css";
import Categorystory from "../../components/categ/Categorystory";
import { Link, useLocation } from "react-router-dom";
import { Box, Group, NavLink } from "@mantine/core";
import { Select } from "@mantine/core";
import { Radio } from "@mantine/core";
import { Checkbox } from "@mantine/core";

const data = Array(50)
  .fill(0)
  .map((_, index) => `Item ${index}`);

function Movies() {
  const location = useLocation();
  const [value, setValue] = useState("react");
  const [category, setCategory] = useState([]);
  const [popular, setPopular] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjEwNGVmMWY1MzBlNDg5MWMzZjQyMzEzNDU2MGQ4MyIsInN1YiI6IjY0ZWM3OWE4ZTg5NGE2MDBhZTc1NGU5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nz3tSIllbnd1yLVAQ84HL3Gx8BM15KXz42ea5H_tSFk",
      },
    };

    fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", options)
      .then((response) => response.json())
      .then((response) => setCategory(response.genres))
      .catch((err) => console.error(err));
  }, []);
  console.log("category", category);

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
      `https://api.themoviedb.org/3${location.pathname}?language=en-US&page=${page}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setPopular([...response.results]);
      })
      .catch((err) => console.error(err));
  }, [page]);
  console.log(popular);
  console.log("page", page);

  const LoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };
  console.log(location.pathname);

  return (
    <>
      <div>
        <h3 style={{ fontWeight: "700" }}>TMDB Movies</h3>
      </div>
      <div className="movies_content">
        <div className="saidbar">
          <div className="saidbar-up">
            <Box>
              <NavLink
                className="nav-sort"
                color="dark"
                label="Sort"
                childrenOffset={28}
              >
                <Select
                  className="sort-select"
                  label="Sort Results By"
                  placeholder="Pick one"
                  searchable
                  dropdownPosition="bottom"
                  nothingFound="No options"
                  maxDropdownHeight={280}
                  data={data}
                />
              </NavLink>
            </Box>
          </div>
          <div className="saidbar-down">
            <Box>
              <NavLink label="Felter" childrenOffset={28} defaultOpened>
                <div className="saidRadio">
                  <Radio.Group
                    value={value}
                    onChange={setValue}
                    name="favoriteFramework"
                    label="Show Me"
                    checked={value}
                    color="lime"
                  >
                    <Radio value="react" label="Everything" />
                    <Radio value="svelte" label="Movies I Haven't Seen" />
                    <Radio value="ng" label="Movies I Have Seen" />
                  </Radio.Group>
                </div>
                <div className="checkbox">
                  <Checkbox.Group
                    label="Select your favorite "
                    color="lime"
                    checked="checked"
                    display="table-caption"
                  >
                    <Group>
                      <Checkbox value="Premiere" label="Premiere" />
                      <Checkbox value="svelte" label="Theatrical(limited)" />
                      <Checkbox value="Theatrical" label="Theatrical" />
                      <Checkbox value="Digital" label="Digital" />
                      <Checkbox value="Physical" label="Physical" />
                      <Checkbox value="TV" label="TV" />
                    </Group>
                  </Checkbox.Group>
                </div>
                <div className="catbox_container">
                  {category.map((cat, id) => (
                    <div className="catopshin">
                      <Link to={`/person${cat.id}`} key={id}>
                        {cat.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </NavLink>
            </Box>
          </div>
          <div className="Search-btn">
            <button>Search</button>
          </div>
        </div>
        <div className="mainbar">
          {popular?.map((pop, index) => (
            <Categorystory play={pop} index={index} key={index} />
          ))}
          <div className="play-btn">
            <button onClick={LoadMore}>Lode More</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Movies;
