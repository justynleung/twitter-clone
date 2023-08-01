import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DarkModePreference {
    isDark: boolean
}

const initialState: DarkModePreference = {
    isDark: false
};

export const darkMode = createSlice({
    name: 'darkModePreference',
    initialState,
    reducers: {
        setIsDark: (state) => {
            state.isDark = !state.isDark
        }
    }
})

export const { setIsDark } = darkMode.actions;
export default darkMode.reducer;