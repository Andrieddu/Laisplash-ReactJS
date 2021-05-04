import React from "react";
import "./Suggestions.css";
import { Link } from "react-router-dom";

function Suggestions() {
  return (
    <div className="suggestions">
      <Link to="/" className="suggestions_item suggestions_item--active">
        Editorial
      </Link>

      <div className="suggestions_breaker"></div>

      <div className="suggestions_list">
        <Link to="/s/wallpaper" className="suggestions_item">
          Wallpaper
        </Link>
        <Link to="/s/nature" className="suggestions_item">
          Nature
        </Link>
        <Link to="/s/people" className="suggestions_item">
          People
        </Link>
        <Link to="/s/architecture" className="suggestions_item">
          Architecture
        </Link>
        <Link to="/s/current-events" className="suggestions_item">
          Current&nbsp;Events
        </Link>
        <Link to="/s/business-work" className="suggestions_item">
          Business&nbsp;&&nbsp;Work
        </Link>
        <Link to="/s/experimental" className="suggestions_item">
          Experimental
        </Link>
        <Link to="/s/fashion" className="suggestions_item">
          Fashion
        </Link>
        <Link to="/s/film" className="suggestions_item">
          Film
        </Link>
        <Link to="/s/street-photography" className="suggestions_item">
          Street&nbsp;Photography
        </Link>
        <Link to="/s/interiors" className="suggestions_item">
          Interiors
        </Link>
        <Link to="/s/health" className="suggestions_item">
          Health&nbsp;&&nbsp;Wellness
        </Link>
        <Link to="/s/technology" className="suggestions_item">
          Technology
        </Link>
        <Link to="/s/travel" className="suggestions_item">
          Travel
        </Link>
        <Link to="/s/textures-patterns" className="suggestions_item">
          Textures&nbsp;&&nbsp;Patterns
        </Link>
        <Link to="/s/animals" className="suggestions_item">
          Animals
        </Link>
        <Link to="/s/food-drink" className="suggestions_item">
          Food&nbsp;&&nbsp;Drink
        </Link>
        <Link to="/s/athletics" className="suggestions_item">
          Athletics
        </Link>
        <Link to="/s/spirituality" className="suggestions_item">
          Spirituality
        </Link>
        <Link to="/s/arts-culture" className="suggestions_item">
          Arts&nbsp;&&nbsp;Culture
        </Link>
        <Link to="/s/history" className="suggestions_item">
          History
        </Link>
      </div>
    </div>
  );
}

export default Suggestions;
