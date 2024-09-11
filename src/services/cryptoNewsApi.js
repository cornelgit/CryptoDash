import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
    "x-rapidapi-key": "c25a2042e4msh9410e47178c9ea9p15db72jsn7f035fa1e65e",
    "x-rapidapi-host": "cryptocurrency-news2.p.rapidapi.com",
};

const baseUrl = "https://cryptocurrency-news2.p.rapidapi.com/v1";

const createRequest = (url) => ({
    url,
    headers: cryptoNewsHeaders,
});

export const cryptoNewsApi = createApi({
    reducerPath: "cryptoNewsApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: () => createRequest(`/cryptodaily`),
        }),
    }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
