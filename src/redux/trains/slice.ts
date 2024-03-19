import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ITrains } from '../../types/trains'

export const trainsSlice = createApi({
    reducerPath: 'trains',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://gist.githubusercontent.com/orlov-oleg-developer',
    }),
    endpoints: (builder) => ({
        getTrains: builder.query<ITrains[], void>({
            query() {
                return {
                    url: '/49f08290d1c59a6851e0a0581900e2a7/raw/e5daf87338f3c75165f8edf4c76cc7ec9c2b4aa9/gistfile1.json',
                }
            },
        }),
    }),
})
