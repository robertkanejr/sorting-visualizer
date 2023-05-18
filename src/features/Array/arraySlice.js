import { createSlice } from "@reduxjs/toolkit";
import { randomizeArray } from "../../utils/createArray";

const initialState = {
	array: [],
	arrayLength: 30,
};

export const arraySlice = createSlice({
	name: "array",
	initialState,
	reducers: {
		setArray: (state, action) => {
			state.array = action.payload;
		},
		setArrayLength: (state, action) => {
			state.arrayLength = action.payload;
			state.array = randomizeArray(state.arrayLength);
		},
		resetArray: (state) => {
			state.array = randomizeArray(state.arrayLength);
		},
	},
});

export const { setArray, setArrayLength, resetArray } = arraySlice.actions;
export default arraySlice.reducer;
