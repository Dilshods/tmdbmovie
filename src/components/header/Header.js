import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Menu } from "@mantine/core";
import { IoMdAdd } from "react-icons/io";
import { AiFillBell } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { Select } from "@mantine/core";
import { Popover, TextInput, createStyles } from "@mantine/core";
const Hamburger = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="52"
    height="24"
    viewBox="0 0 52 24"
  >
    <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
      <rect
        id="Rectangle_3"
        data-name="Rectangle 3"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 47)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_5"
        data-name="Rectangle 5"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 67)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_4"
        data-name="Rectangle 4"
        width="52"
        height="4"
        rx="2"
        transform="translate(294 57)"
        fill="#574c4c"
      />
    </g>
  </svg>
);

const useStyles = createStyles((theme) => ({
  item: {
    "&[data-hovered]": {
      backgroundColor:
        theme.colors[theme.primaryColor][theme.fn.primaryShade()],
      color: theme.white,
    },
  },
}));

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const data = Array(50)
    .fill(0)
    .map((_, index) => `Item ${index}`);
  const { classes } = useStyles();

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <div className="tmdb-nav">
        <div className=" nav-header">
          <div className="content-nav">
            <div className="nav-logo">
              <Link to="/">
                <img
                  src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                  alt="tmdblogo"
                />
              </Link>

              <Menu
                label="dilshodjon"
                shadow="md"
                width={120}
                trigger="hover"
                position="bottom-start"
                openDelay={100}
                closeDelay={400}
              >
                <Menu.Target>
                  <button className="nav_btn">Movies</button>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item component="a" href="/movie/popular">
                    Popular
                  </Menu.Item>
                  <Menu.Item component="a" href="/movie/now_playing">
                    Now Playing
                  </Menu.Item>
                  <Menu.Item component="a" href="/movie/upcoming">
                    Upcoming
                  </Menu.Item>
                  <Menu.Item component="a" href="/movie/top_rated">
                    Top Rated
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>

              <Menu
                position="bottom-start"
                shadow="md"
                width={120}
                trigger="hover"
                openDelay={100}
                closeDelay={400}
              >
                <Menu.Target>
                  <button className="nav_btn">TV Shows</button>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item component="a" href="/tv/popular">
                    Popular
                  </Menu.Item>
                  <Menu.Item component="a" href="/tv/airing_today">
                    Airing Today
                  </Menu.Item>
                  <Menu.Item component="a" href="/tv/on_the_air">
                    On TV
                  </Menu.Item>
                  <Menu.Item component="a" href="/tv/top_rated">
                    Top Rated
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>

              <Menu
                shadow="md"
                position="bottom-start"
                width="150px"
                trigger="hover"
                openDelay={100}
                closeDelay={400}
              >
                <Menu.Target>
                  <button className="nav_btn">People</button>
                </Menu.Target>
                <Menu.Dropdown fontSize={2}>
                  <Menu.Item component="a" href="/person">
                    Popular People
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </div>
            <div className="menu-icon" onClick={handleShowNavbar}>
              <Hamburger />
            </div>
            <div className={`mobil  ${showNavbar && "active"}`}>
              <Link to={`/`}>
                <Menu width={200} shadow="md" withArrow classNames={classes}>
                  <Menu.Target>
                    <button className="nav-add">
                      <IoMdAdd color="white" />
                    </button>
                  </Menu.Target>

                  <Menu.Dropdown>
                    <Menu.Item component="a" href="#">
                      Add New Movie
                    </Menu.Item>
                    <Menu.Item component="a" href="#">
                      Add New TV Show
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </Link>
              <Link>
                <Popover
                  width={300}
                  trapFocus
                  position="bottom"
                  withArrow
                  shadow="md"
                >
                  <Popover.Target>
                    <button className="nav-lenguage">Ru</button>
                  </Popover.Target>
                  <Popover.Dropdown
                    sx={(theme) => ({
                      background:
                        theme.colorScheme === "dark"
                          ? theme.colors.dark[7]
                          : theme.white,
                    })}
                  >
                    <TextInput label="Name" placeholder="Name" size="xs" />
                    <Select
                      data={data}
                      placeholder="Pick one"
                      label="Your favorite framework/library"
                      description="Ydfgsdgf"
                      size="md"
                      nothingFound="No options"
                      maxDropdownHeight={280}
                      withAsterisk
                    />
                  </Popover.Dropdown>
                </Popover>
              </Link>
              <Link>
                <Menu width={300} shadow="md" withArrow>
                  <Menu.Target>
                    <button className="nav-song">
                      <AiFillBell />
                    </button>
                  </Menu.Target>

                  <Menu.Dropdown>
                    <Menu.Label className="nav-song-grop">
                      Unread notifications
                    </Menu.Label>
                    <Menu.Label>
                      Good job! Looks like you're all caught up.<a>View All</a>
                    </Menu.Label>
                  </Menu.Dropdown>
                </Menu>
              </Link>
              <Link>
                <Menu width={170} shadow="md" withArrow classNames={classes}>
                  <Menu.Target>
                    <button className="nav-profile">D</button>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Label className="profile-group">
                      Dilshod_dev
                    </Menu.Label>
                    <Menu.Label component="a" href="#">
                      View profile
                    </Menu.Label>
                    <Menu.Divider />
                    <Menu.Item component="a" href="#">
                      Discussions
                    </Menu.Item>
                    <Menu.Item component="a" href="#">
                      List
                    </Menu.Item>
                    <Menu.Item component="a" href="#">
                      Rantings
                    </Menu.Item>
                    <Menu.Item component="a" href="#">
                      Watchlist
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Item component="a" href="#">
                      Edit Profile
                    </Menu.Item>
                    <Menu.Item component="a" href="#">
                      Settings
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Item component="a" href="#">
                      Logout
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </Link>
              <Link>
                <Popover
                  width={"100%"}
                  trapFocus
                  position="bottom"
                  withArrow
                  shadow="md"
                >
                  <Popover.Target>
                    <button className="nav-search">
                      <FaSearch />
                    </button>
                  </Popover.Target>
                  <Popover.Dropdown
                    sx={(theme) => ({
                      background:
                        theme.colorScheme === "dark"
                          ? theme.colors.dark[7]
                          : theme.white,
                    })}
                  >
                    <TextInput
                      label="Search"
                      placeholder="Search for a movie, tv show, person"
                      size="xs"
                    />
                  </Popover.Dropdown>
                </Popover>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
