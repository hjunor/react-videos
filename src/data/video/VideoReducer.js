import { StorageService } from "../services/StorageService";

export const videoInitialState = {
  selectedVideo: {},
  videos: StorageService.get("videoList", []),
};

export function videoReducer(state, action) {
  switch (action.type) {
    case "add":
      const newList = [action.value, ...state.videos];
      StorageService.set("videoList", newList);
      return { ...state, videos: newList };
    case "select":
      return { ...state, selectedVideo: action.value };
    case "remove":
      const removeVideo = state.videos.filter((video) => {
        return video !== action.value;
      });
      StorageService.set("videoList", removeVideo);
      return { ...state, videos: removeVideo };
    default:
      return state;
  }
}
