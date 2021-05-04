import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

//Initial State
const initialState = {
  collection: localStorage.getItem("collection")
    ? JSON.parse(localStorage.getItem("collection"))
    : [],
};

//Create Context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("collection", JSON.stringify(state.collection));
  }, [state]);

  //Actions
  const addPhotoToCollection = (photo) => {
    dispatch({ type: "ADD_PHOTO_TO_COLLECTION", payload: photo });
  };

  const removePhotoFromCollection = (id) => {
    dispatch({ type: "REMOVE_PHOTO_FROM_COLLECTION", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        collection: state.collection,
        addPhotoToCollection,
        removePhotoFromCollection,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
