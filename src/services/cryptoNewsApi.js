import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
    "x-rapidapi-key": import.meta.env.VITE_API_URL_NEWS_KEY,
    "x-rapidapi-host": import.meta.env.VITE_API_URL_NEWS_HOST,
};

const baseUrl = import.meta.env.VITE_API_URL_NEWS;

const createRequest = (url) => ({
    url,
    headers: cryptoNewsHeaders,
});

export const cryptoNewsApi = createApi({
    reducerPath: "cryptoNewsApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: () => createRequest(`/bsc`),
        }),
    }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
