import React, { useEffect, useState } from "react";
import "./Infomation.css";
import { useParams } from "react-router-dom";

function Infomation() {
  const [parent, setParent] = useState([]);
  const [similare, setSimilare] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=8f104ef1f530e4891c3f423134560d83`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setParent(result))
      .catch((error) => console.log("error", error));
  }, []);
  console.log(parent);
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${id}credits?api_key=8f104ef1f530e4891c3f423134560d83`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setSimilare(result))
      .catch((error) => console.log("error", error));
  }, []);
  console.log("similar", similare);

  return (
    <>
      <div className="row">
        <div className="col-side">
          <div className="sidebar-sticky">
            <div className="images">
              <img
                src={"https://image.tmdb.org/t/p/w500" + parent?.profile_path}
                alt="person"
              />
            </div>
            <div className="column">
              <section className="full_wrapper facts left_column">
                <h3>
                  <bdi>Personal Info</bdi>
                </h3>

                <section className="facts">
                  <p>
                    <strong>
                      <bdi>Known For</bdi>
                    </strong>{" "}
                    {parent?.known_for_department}
                  </p>
                  <p>
                    <strong>
                      <bdi>Known Credits</bdi>
                    </strong>{" "}
                    {parent?.popularity}
                  </p>
                  <p>
                    <strong>
                      <bdi>Gender</bdi>
                    </strong>{" "}
                    {parent?.gender === 0
                      ? "not gender"
                      : parent?.gender === 1
                      ? "Famale"
                      : parent?.gender === 2
                      ? "Male"
                      : ""}
                  </p>
                  <p className="full">
                    <strong>
                      <bdi>Birthday</bdi>
                    </strong>
                    {parent?.birthday}
                  </p>
                  <p className="full">
                    <strong>
                      <bdi>Place of Birth</bdi>
                    </strong>{" "}
                    {parent?.place_of_birth}
                  </p>

                  <p className="full true">
                    <strong>
                      <bdi>Also Known As</bdi>
                    </strong>
                  </p>
                  <ul>
                    <li itemprop="additionalName">{[parent?.also_known_as]}</li>
                  </ul>
                </section>

                <section className="content_score" data-role="tooltip">
                  <h4 className="flex" dir="auto">
                    Content Score&nbsp;
                  </h4>

                  <div className="content_score_wrapper">
                    <div className="content_score">
                      <div className="false">
                        <p>100</p>
                      </div>
                    </div>
                    Name
                    <p dir="auto">Yes! Looking good!</p>
                    <div className="content_score_helper hide">
                      <p>
                        Looks like we're missing the following data in{" "}
                        <strong>ru-RU</strong> or <strong>en-US</strong>...
                      </p>
                    </div>
                  </div>
                </section>
              </section>
            </div>
          </div>
        </div>
        <div className="col-main">
          <div className="chartjs-size-monitor">
            <div className="title" dir="auto">
              <h2 className="title">
                <a href="#">{parent?.name}</a>
              </h2>
              <h4 dir="auto">Biography</h4>
              <p>{parent?.biography}</p>
            </div>
            <div>
              <img
                src={
                  "https://image.tmdb.org/t/p/w500" + similare?.backdrop_path
                }
                alt="person"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Infomation;
