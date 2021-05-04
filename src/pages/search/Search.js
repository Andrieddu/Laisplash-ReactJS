import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Search.css";

import Header from "../../components/header/Header";
import Photo from "../../components/photo/Photo";

import { searchPhotos } from "../../api/unsplash";

function Search() {
  const { searchTerm } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    searchPhotos(searchTerm)
      .then((res) => res.data)
      .then((data) => {
        console.log(data.results);
        setPhotos(
          data.results.map((photo) => ({
            id: photo.id,
            imageUrl: photo.urls.regular,
            downloadUrl: photo.urls.full,
            username: photo.user.username,
            userImageUrl: photo.user.profile_image.medium,
            profileUrl: photo.user.links.html,
            likes: photo.likes,
            download: photo.links.download,
          }))
        );
      })
      .catch((error) => alert(error));
  }, [searchTerm]);

  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="container">
          <h1 className="title">{searchTerm}</h1>
          <div className="photos_container">
            {photos.map((photo) => (
              <Photo key={photo.imageUrl} photo={photo} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
