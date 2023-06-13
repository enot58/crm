import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { RootState } from "../../app/store";

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.REACT_APP_URL_API,
    prepareHeaders: (headers, { getState }) => {
        const token =
            (getState() as RootState).user.token ||
            localStorage.getItem("token");

        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        console.log(localStorage);
        return headers;
    },
});

const baseQueryWithRetry = retry(baseQuery, {
    maxRetries: 1,
});

export const api = createApi({
    reducerPath: "api",
    baseQuery: baseQueryWithRetry,
    refetchOnMountOrArgChange: true,
    endpoints: () => ({}),
});