import React, { useRef } from "react";
import { useHistory, Link } from "react-router-dom";
import "./Hero.css";

import SearchIcon from "@material-ui/icons/Search";
import CropFreeIcon from "@material-ui/icons/CropFree";

function Hero() {
  const history = useHistory();
  const inputRef = useRef();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const search = inputRef.current.value;
    if (search) history.push(`/s/${search}`);
  };

  return (
    <div className="hero">
      <img
        src="https://source.unsplash.com/random/1920x1080"
        alt=""
        className="hero_image"
      />

      <div className="hero_content">
        <div className="hero_contentWrapper">
          <h1 className="hero_contentTitle">Laisplash</h1>
          <br />
          <h3 className="hero_contentSubtitle">
            The internet’s source of freely-usable images.
          </h3>
          <h3 className="hero_contentSubtitle">
            Powered by creators everywhere.
          </h3>
          <br />
          <form className="hero_contentInput" onSubmit={handleSearchSubmit}>
            <SearchIcon className="header_icon" />
            <input
              className="hero_contentInputField"
              ref={inputRef}
              type="text"
              placeholder="Search free high-resolution photos"
            />
            <CropFreeIcon className="header_icon" />
          </form>
          <br />
          <h4 className="hero_contentSubtitle">
            Trending:
            <Link to="/s/flower" className="trending_item">
              flower,
            </Link>
            <Link to="/s/wallpapers" className="trending_item">
              wallpapers,
            </Link>
            <Link to="/s/background" className="trending_item">
              background,
            </Link>
            <Link to="/s/happy" className="trending_item">
              happy,
            </Link>
            <Link to="/s/love" className="trending_item">
              love
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Hero;
