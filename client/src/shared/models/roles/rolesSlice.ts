import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../../api";
import { IDataError, IRolesSlice } from "../../interfaces/store";

const initialState: IRolesSlice = {
    roles: null,
    isLoading: false,
    isError: false,
    dataError: null,
};

const rolesSlice = createSlice({
    name: "roles",
    initialState,
    reducers: {
        setIsError(state, action) {
            state.isError = action.payload;
        },
    },
    extraReducers(builder) {
        builder.addMatcher(
            authApi.endpoints.register.matchPending,
            (state, action) => {
                state.isLoading = true;
            }
        );
        builder.addMatcher(
            authApi.endpoints.register.matchFulfilled,
            (state, action) => {
                state.isLoading = false;
            }
        );
        builder.addMatcher(
            authApi.endpoints.register.matchRejected,
            (state, action) => {
                state.isLoading = false;
                state.isError = true;
                const { status, data } = action.payload as IDataError;
                state.dataError = {
                    status: Number(status),
                    data,
                };
            }
        );
    },
});

export const { setIsError } = rolesSlice.actions;
export const rolesReducer = rolesSlice.reducer;
