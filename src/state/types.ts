import { rootReducer, store } from "./store";

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
