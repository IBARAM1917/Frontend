import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slice/userSlice";
import themeReducer from "./Slice/themeSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from './Slice/cartSlice';
import productReducer from "./Slice/productSlice";


const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer,
  product: productReducer,
  cart: cartReducer,
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false });
  },
});
export const persistor = persistStore(store);
