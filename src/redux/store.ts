import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { trainsMiddleware, trainsReducer, trainsReducerPath } from './trains'

const rootReducer = combineReducers({
    [trainsReducerPath]: trainsReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat([trainsMiddleware])
    },
})

export type RootState = ReturnType<typeof rootReducer>
