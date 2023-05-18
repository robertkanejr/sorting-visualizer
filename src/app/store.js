import { configureStore } from "@reduxjs/toolkit";
import arrayReducer from "../features/Array/arraySlice";

export const store = configureStore({
	reducer: {
		array: arrayReducer,
	},
});
