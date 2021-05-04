import React, { useContext } from "react";
import "./PhotoCollection.css";
import { GlobalContext } from "../../context/GlobalState";

import { Button, Avatar } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import RemoveIcon from "@material-ui/icons/Remove";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

function PhotoCollection({ photo, type }) {
  const { removePhotoFromCollection } = useContext(GlobalContext);

  return (
    <div className="photo">
      <div className="photo_header">
        <Button
          className="photo_button"
          variant="contained"
          size="small"
          disableElevation
        >
          <FavoriteIcon fontSize="small" style={{ color: "#ff0000" }} />
          &nbsp;
          <span>{photo.likes}</span>
        </Button>
        &nbsp; &nbsp; &nbsp;
        {type === "collection" && (
          <Button
            className="photo_button"
            variant="contained"
            size="small"
            disableElevation
            onClick={() => removePhotoFromCollection(photo.id)}
          >
            <RemoveIcon fontSize="small" />
            &nbsp;
            <span>Remove</span>
          </Button>
        )}
      </div>

      <img className="photo_img" src={photo.imageUrl} alt="" />

      <div className="photo_footer">
        <a href={photo.profileUrl} target="blank" className="photo_footerLeft">
          <Avatar src={photo.userImageUrl}>{photo.username[0]}</Avatar>
          <h4 className="photo_footerLeftName">{photo.username}</h4>
        </a>
        <a
          href={photo.download}
          target="blank"
          rel="noopener noreferrer"
          download
        >
          <Button
            className="photo_button"
            title="Download Photo"
            variant="contained"
            size="small"
            disableElevation
          >
            <ArrowDownwardIcon fontSize="small" />
          </Button>
        </a>
      </div>
    </div>
  );
}

export default PhotoCollection;
