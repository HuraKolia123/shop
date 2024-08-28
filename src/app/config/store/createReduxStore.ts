import { ReducersMapObject } from "redux";
import { StateSchema } from "./StateSchema";
import { configureStore } from "@reduxjs/toolkit";

export function createReduxStore() {
  const reducers: ReducersMapObject<StateSchema> = {};

  const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  });
  return store;
}
