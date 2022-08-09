import { createSlice } from '@reduxjs/toolkit';

export const favCharactersSlice = createSlice({
    name: 'favCharacters',
    initialState: {
        favorites: localStorage.getItem('favorites') != null ? localStorage.getItem('favorites') : []
    },
    reducers: {
        addCharacter: (state, action) => {
            let characterId = action.payload.characterId;
            let inFavorites = action.payload.inFavorites;
            if (inFavorites) {
                let favoritesToUpdate = localStorage.getItem('favorites').split(',');
                let index = favoritesToUpdate.indexOf(characterId);
                favoritesToUpdate.splice(index, 1);
                state.favorites = [...favoritesToUpdate];
                localStorage.removeItem('favorites');
                localStorage.setItem('favorites', favoritesToUpdate);
                return;
            }
            state.favorites = [...state.favorites, characterId];
            localStorage.setItem('favorites', [...state.favorites]);
        }
    }
})

export const { addCharacter } = favCharactersSlice.actions;