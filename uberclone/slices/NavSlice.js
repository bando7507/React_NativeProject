import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination : null,
    travelTimeInfo : null
}

const navSlice = createSlice({
    name: 'nav',
    initialState,

    reducers:{
        setOrigin: (state, action) =>{
            state.origin = action.payload
        },

        setDestination: (state, action) =>{
            state.origin = action.payload
        },

        setTravelTimeInfo: (state, action) =>{
            state.origin = action.payload
        }
    }

});

export const { setOrigin, setDestination, setTravelTimeInfo } = navSlice.actions;
   

// Selector

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInfo = (state) => state.nav.travelTimeInfo;

export default navSlice.reducer;