import "./banner.css";
import BannerImg from "../../assets/images/Rectangle 39.png";
const Banner = () => {
  return (
    <div id="about" className="container">
      <div className="banner ">
        <div className="banner-titles">
          <h1>Discover Istanbul's Hidden Gems</h1>
          <p>
            Its vibrant culture, delicious cuisine, and welcoming people make it
            a must-visit destination for any traveler seeking adventure, beauty,
            and inspiration.
          </p>
          <button>Read More</button>
        </div>
        <div className="banner-img">
          <img src={BannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
