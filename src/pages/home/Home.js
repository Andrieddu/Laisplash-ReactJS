import React, { useEffect, useState } from "react";
import "./Home.css";

import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Photo from "../../components/photo/Photo";

import { getPhotos } from "../../api/unsplash";

function Home() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPhotos()
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        setPhotos(
          data.map((photo) => ({
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
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <div className="wrapper">
        <div className="container">
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

export default Home;
