import { useReducer } from 'react';

const initialState = {
  showComponent: false,
  photoDetail: [],
  likes: [],
  photos: [],
  topics: [],
  topicsClicked: []
};
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_TOPIC: 'SELECT_TOPIC',
  REMOVE_TOPIC: 'REMOVE_TOPIC',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  REMOVE_PHOTO_DETAILS: 'REMOVE_PHOTO_DETAILS'
}
export function useApplicationData() {
  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.FAV_PHOTO_ADDED:
        return { ...state, likes: [...state.likes, action.payload.id] }
      case ACTIONS.FAV_PHOTO_REMOVED:
        return { ...state, likes: state.likes.filter((item) => item !== action.payload.id) }
      case ACTIONS.SET_PHOTO_DATA:
        return { ...state, photos: action.payload.photos }
      case ACTIONS.SET_TOPIC_DATA:
        return { ...state, topics: action.payload.topics }
      case ACTIONS.SELECT_TOPIC:
        return { ...state, topicsClicked: [...state.topicsClicked, action.payload.id] }
      case ACTIONS.REMOVE_TOPIC:
        return { ...state, topicsClicked: state.topicsClicked.filter((item) => item !== action.payload.id) }
      case ACTIONS.DISPLAY_PHOTO_DETAILS:
        return { ...state, showComponent: true, photoDetail: [state.photos.find((item) => item.id === action.payload.id)] }
      case ACTIONS.REMOVE_PHOTO_DETAILS:
        return { ...state, showComponent: false, photoDetail: [] }
      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
    }
  }
  return useReducer(reducer, initialState);
}