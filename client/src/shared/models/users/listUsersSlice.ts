import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "../../api";
import { IUsersResponse } from "../../interfaces";

interface IListUsers {
    list: IUsersResponse[];
    isLoading: boolean;
    isError: boolean;
}

const initialState = {
    list: [],
    isLoading: false,
    isError: false,
};

const listUsersSlice = createSlice({
    name: "listUsers",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addMatcher(
            userApi.endpoints.getAllUsers.matchPending,
            (state, action) => {
                state.isLoading = true;
            }
        );
        builder.addMatcher(
            userApi.endpoints.getAllUsers.matchFulfilled,
            (state, action) => {
                state.isLoading = false;
                state.list = action.payload;
            }
        );
        builder.addMatcher(
            userApi.endpoints.getAllUsers.matchRejected,
            (state, action) => {
                state.isLoading = false;
                state.isError = true;
            }
        );
    },
});

export const {} = listUsersSlice.actions;
export const listUserReducer = listUsersSlice.reducer;
