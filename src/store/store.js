import { configureStore } from '@reduxjs/toolkit'
import { favCharactersSlice } from './slices/characters';

export const store = configureStore({
    reducer: {
        favorites: favCharactersSlice.reducer
    },
})