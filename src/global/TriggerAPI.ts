import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProducts, IData } from "../models/Interfaces";
const URL = "https://dummyjson.com/products";

export const TriggerAPI = createApi({
    reducerPath: "TriggerAPI",
    tagTypes: ["Trigger"],
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (builder) => ({
        all: builder.query<IProducts, void>({
            query: () => ({
                url: `/?limit=100`,
                method: "GET"
            }),
            providesTags: ["Trigger"]
        }),
        one: builder.query<IData, number>({
            query: (id) => ({
                url: `/${id}`,
                method: "GET"
            }),
            providesTags: ["Trigger"]
        }),
        cat: builder.query<IData, IData>({
            query: () => ({
                url: `/categories`,
                method: "GET"
            }),
            providesTags: ["Trigger"]
        }),
        proCat: builder.query<IProducts, string>({
            query: (catName) => ({
                url: `/category/${catName}`,
                method: "GET"
            }),
            providesTags: ["Trigger"]
        })
    }),
});


