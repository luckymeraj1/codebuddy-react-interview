import { applyMiddleware, createStore } from "redux";
import persistStore from "redux-persist/es/persistStore";
import { thunk } from "redux-thunk";
import { persistedReducer } from "./resucers/rootReducer";

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);
export { store, persistor };
