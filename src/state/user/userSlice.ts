import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface UserSlice {
    firstName: string;
    lastName: string;
    role: string;
}

const initialState: UserSlice = {
    firstName: '',
    lastName: '',
    role: ''
};

export const LOGOUT = 'user/logout';

export const logoutUser = createAction(LOGOUT);

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsername: (
            state,
            action: PayloadAction<{ firstName: string; lastName: string; role: string }>
        ) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.role = action.payload.role;
        }
    }
});

export const { setUsername } = userSlice.actions;
export const selectUsername = (state: RootState) =>
    `${state.user.firstName.charAt(0)}. ${state.user.lastName}`;

export default userSlice.reducer;
