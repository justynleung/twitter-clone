import { configureStore } from '@reduxjs/toolkit';
import darkMode from './features/dark-mode';

export const store = configureStore({
    reducer: {
        darkMode
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

