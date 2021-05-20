import { createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import Reducer from "./Reducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, Reducer);
let createStoreWithPersistedReducer = createStore(persistedReducer);
//https://www.npmjs.com/package/redux-persist
let persistore = persistStore(createStoreWithPersistedReducer);

const reduxStore = { store: createStoreWithPersistedReducer, persistore };
export default reduxStore;
