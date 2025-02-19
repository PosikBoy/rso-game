import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "./storage";
import data from "@/data/data";
import questionsSlice, { IInitialState } from "./questions/questions.slice";

const defaultData: { questionsSlice: IInitialState } = {
  questionsSlice: {
    data: data,
  },
};

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["questionsSlice"],
};

const rootReducer = combineReducers({
  questionsSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  preloadedState: defaultData as unknown as undefined,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store, null, () => {
  const state = store.getState();
  if (!state.questionsSlice?.data || state.questionsSlice.data.length === 0) {
    store.dispatch({
      type: "questionsSlice/resetToDefault",
      payload: defaultData.questionsSlice,
    });
  }
});

export default store;

export type TypeRootState = ReturnType<typeof store.getState>;
export type TypeDispatch = typeof store.dispatch;
