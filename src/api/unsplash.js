import axios from "axios";

const UNSPLASH_API_URL = "https://api.unsplash.com";
const UNSPLASH_CLIENT_ID = process.env.REACT_APP_UNSPLASH_CLIENT_ID;

export function getPhotos(params = {}) {
  const page = params.page || 1;
  const perPage = params.perPage || 30;
  return axios(
    `${UNSPLASH_API_URL}/photos?client_id=${UNSPLASH_CLIENT_ID}&per_page=${perPage}&page=${page}`
  );
}

export function searchPhotos(searchTerm, page, perPage) {
  page = page || 1;
  perPage = perPage || 30;
  return axios(
    `${UNSPLASH_API_URL}/search/photos?client_id=${UNSPLASH_CLIENT_ID}&query=${searchTerm}&per_page=${perPage}&page=${page}`
  );
}
