import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "./storage";
import data from "@/data/data";
import questionsSlice from "./questions/questions.slice";

const defaultData = {
  questionsSlice: {
    data: data.map((item) => ({
      id: item.id,
      categoryName: item.categoryName,
      value: item.value,
      isAnswered: item.isAnswered,
    })),
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
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Отключаем проверку для redux-persist
    }),
});

export const persistor = persistStore(store, null, () => {
  const state = store.getState();
  if (!state.questionsSlice?.data || state.questionsSlice.data.length === 0) {
    console.log("Запрашиваю данные из файлика");
    store.dispatch({
      type: "questionsSlice/resetToDefault",
      payload: defaultData.questionsSlice,
    });
  }
});

export type TypeRootState = ReturnType<typeof store.getState>;
export type TypeDispatch = typeof store.dispatch;
