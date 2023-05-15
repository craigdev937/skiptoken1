import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { TriggerAPI } from "./TriggerAPI";

export const Reducer = configureStore({
    reducer: {
        [TriggerAPI.reducerPath]: TriggerAPI.reducer,
    },      // gDM = getDefaultMiddleware
    middleware: (gDM) => gDM().concat(TriggerAPI.middleware),
});

setupListeners(Reducer.dispatch);
export type RootState = ReturnType<typeof Reducer.getState>;
export type AppDispatch = typeof Reducer.dispatch;


