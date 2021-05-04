import React, { useContext, useState } from "react";
import "./Photo.css";
import { GlobalContext } from "../../context/GlobalState";
import { useAuth } from "../../context/AuthContext";

import { Button, Avatar } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddIcon from "@material-ui/icons/Add";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Alert from "@material-ui/lab/Alert";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

function Photo({ photo }) {
  const { addPhotoToCollection, collection } = useContext(GlobalContext);
  const { currentUser } = useAuth();

  let storedPhoto = collection.find((o) => o.id === photo.id);

  // Disable button collection once the photo is stored
  const collectionDisabled = storedPhoto ? true : false;

  // Open-Close alert
  const [open, setOpen] = useState(false);

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
        <Button
          className="photo_button"
          variant="contained"
          size="small"
          disableElevation
          disabled={collectionDisabled}
          onClick={
            currentUser
              ? () => addPhotoToCollection(photo)
              : () => {
                  setOpen(true);
                }
          }
        >
          <AddIcon fontSize="small" />
          &nbsp;
          <span>Add</span>
        </Button>
      </div>

      {/* Alert */}

      <Collapse in={open}>
        <Alert
          className="photo_button photo_alert"
          variant="filled"
          severity="warning"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Please login to add photos to your collection
        </Alert>
      </Collapse>

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

export default Photo;
