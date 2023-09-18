import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer style={{ background: "rgb(3,37,65)" }} className="page-footer">
      <div className="footer-copyright">
        <div className="container footer-content ">
          <ul>
            <li>
              <img
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                alt="logo"
              />
              <pre>{new Date().getFullYear()}.09.10 build time</pre>
            </li>
            <li>
              <p>the basics</p>
              <a href="#">About TMDB</a>
              <a href="#">Contact Us</a>
              <a href="#">Support Forums</a>
              <a href="#">API</a>
              <a href="#">System Status</a>
            </li>
            <li>
              <p>GET INVOLVED</p>
              <a href="#">Contribution Bible</a>
              <a href="#">Add New Movie</a>
              <a href="#">Add New TV Show</a>
            </li>
            <li>
              <p href="#">COMMUNITY</p>
              <a href="#">Guidelines</a>
              <a href="#">Discussions</a>
              <a href="#">Leaderboard</a>
              <a href="#">Twitter</a>
            </li>
            <li>
              <p>LEGAL</p>
              <a href="#">Terms of Use</a>
              <a href="#">API Terms of Use</a>
              <a href="#">Privacy Policy</a>
              <a href="#">DMCA Takedown Request</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
