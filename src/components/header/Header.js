import React, { useEffect, useState, useRef } from "react";
import "./Header.css";
import Suggestions from "../suggestions/Suggestions";

import { Avatar, Tooltip, Menu, MenuItem } from "@material-ui/core";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import SearchIcon from "@material-ui/icons/Search";
import CropFreeIcon from "@material-ui/icons/CropFree";

import { useHistory, Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { auth } from "../../firebase/firebase";

function Header() {
  const history = useHistory();
  const location = useLocation();
  const inputRef = useRef();
  const [anchorEl, setAnchorEl] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { currentUser } = useAuth();

  // Show Categories
  useEffect(() => {
    if (location.pathname === "/") setShowSuggestions(true);
  }, [location.pathname]);

  useEffect(() => {
    let unlisten = history.listen((location, action) => {
      if (location.pathname === "/") {
        inputRef.current.value = "";
        setShowSuggestions(true);
      }

      const tempArray = location.pathname.split("s/");
      if (tempArray.length === 2) {
        inputRef.current.value = tempArray[1];
        setShowSuggestions(false);
      }
    });
    return unlisten;
  }, [history]);

  // Search
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const search = inputRef.current.value;
    if (search) history.push(`/s/${search}`);
  };

  // Drop down menu open/close
  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = (e) => setAnchorEl(false);

  // Go to the Home Page
  const goToHome = () => history.push("/");

  // Go to Collection Page
  const goToCollection = () => history.push("/collection");

  const login = () => {
    if (currentUser) {
      auth.signOut();
    }
  };

  return (
    <div className={`header_wrapper ${!showSuggestions && "border_bottom"}`}>
      <div className="header_container">
        <PhotoCameraIcon
          className="header_logo"
          style={{ fontSize: 40 }}
          onClick={goToHome}
        />

        <form className="header_input" onSubmit={handleSearchSubmit}>
          <SearchIcon className="header_icon" />
          <input
            type="text"
            className="header_inputField"
            placeholder="Search free high-resolution photos"
            ref={inputRef}
          />
          <CropFreeIcon className="header_icon" />
        </form>

        <div className="header_right">
          <div className="header_rightButtonWrapper">
            <button
              className="header_rightButton"
              size="small"
              onClick={goToHome}
            >
              Home
            </button>
            <button
              className="header_rightButton"
              size="small"
              onClick={goToCollection}
            >
              Collection
            </button>
          </div>

          <div className="dropDownMenu">
            <Tooltip title="More Options" arrow>
              <Avatar
                src={
                  currentUser
                    ? "https://cdn3.iconfinder.com/data/icons/the-face-says-it-all/900/emoji-face-emotions-smile-512.png"
                    : ""
                }
                alt="avatar"
                className="header_rightAvatar header_rightIcon header_rightOptionsIcon"
                onClick={handleOpen}
                aria-controls="simple_menu"
                aria-haspopup="true"
              />
            </Tooltip>

            <Menu
              elevation={2}
              getContentAnchorEl={null}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              id="simple_menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={login}>
                <Link to={!currentUser && "/login"} className="header_link">
                  <span className="header_rightMenuItem">
                    {currentUser ? "Sign Out" : "Sign in"}
                  </span>
                </Link>
              </MenuItem>

              <MenuItem>
                <span className="header_rightMenuItem">
                  {currentUser?.email}
                </span>
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>

      {/* Show Catergories only in Home page */}
      {showSuggestions && <Suggestions />}
    </div>
  );
}

export default Header;
