import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import localStorage from "redux-persist/es/storage";
import { form } from "./form/form";
import { posts } from "./posts/posts";
const persistConfig = {
  key: "codeBuddy",
  storage: localStorage,
};

const appReducer = combineReducers({
  form,
  posts,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
