import swap from "../swap";

export const bubbleSort = (arr) => {
	let checked;
	do {
		checked = false;
		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i] > arr[i + 1]) {
				swap(arr, i, i + 1);
				checked = true;
			}
		}
	} while (checked);
	return arr;
};
