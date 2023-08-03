import { createSlice } from '@reduxjs/toolkit';

export const tainerSlice = createSlice({
    name: 'trainer',
    initialState: '',
    reducers: {
        setTrainerG: (state, action) => action.payload
    }
})

export const { setTrainerG } = tainerSlice.actions;

export default tainerSlice.reducer;
