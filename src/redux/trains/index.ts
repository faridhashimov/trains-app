import { trainsSlice } from './slice'

export const trainsReducer = trainsSlice.reducer
export const trainsReducerPath = trainsSlice.reducerPath
export const trainsMiddleware = trainsSlice.middleware

export const { useGetTrainsQuery } = trainsSlice
