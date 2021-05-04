/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_PHOTO_TO_COLLECTION":
      return {
        ...state,
        collection: [action.payload, ...state.collection],
      };

    case "REMOVE_PHOTO_FROM_COLLECTION":
      return {
        ...state,
        collection: state.collection.filter(
          (photo) => photo.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
