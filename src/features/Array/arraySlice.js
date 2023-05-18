import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	array: [],
};

export const arraySlice = createSlice({
	name: "randomArr",
	initialState,
	reducers: {
		randomizeArray: (state) => {
			const arraySize = 100;
			for (let i = 0; i < state.array.length; i++) {
				let bar = document.getElementById(i).style;
				bar.backgroundColor = "#ff7f50";
			}
			let arr = [];
			for (let i = 0; i < arraySize; i++) arr.push(randomVals(20, 400));
			// setArray(arr);
		},

		randomVals: (min, max) => {
			let randomVal = Math.floor(Math.random() * (max - min + 1) + min);
			return randomVal;
		},
	},
});

export const { randomizeArray, randomVals } = arraySlice.actions;

export default arraySlice.reducer;
