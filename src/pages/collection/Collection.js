import React, { useContext } from "react";
import "./Collection.css";

import Header from "../../components/header/Header";
import PhotoCollection from "../../components/photo-collection/PhotoCollection";

import { GlobalContext } from "../../context/GlobalState";

function Collection() {
  const { collection } = useContext(GlobalContext);

  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="container">
          <h3 className="title">Personal Collection ({collection?.length})</h3>
          <div className="photos_container">
            {collection.map((photo) => (
              <PhotoCollection
                key={photo.imageUrl}
                photo={photo}
                type="collection"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Collection;
