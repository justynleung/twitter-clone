import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    value: AuthState;
}

type AuthState = {
    isAuth: boolean;
    username: '';
    uid: '';
    isModerator: boolean;
}

const initialState = {
    value: {
        isAuth: false,
        username: '',
        uid: '',
        isModerator: false,
    }
}

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: () => {
            return initialState
        },
        logIn: (state, action: PayloadAction<string>) => {
            return {
                value: {
                    isAuth: true,
                    username: action.payload,
                    uid: 'aksjdfakshdakjsfd',
                    isModerator: false
                }
            }
        }
    }
})

export const { logIn, logOut } = auth.actions;
export default auth.reducer;