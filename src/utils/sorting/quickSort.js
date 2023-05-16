import swap from "../swap";

export default function quickSort(arr) {
	if (!arr) return [];
	qsHelper(arr, 0, arr.length - 1);
	return arr;
}

const qsHelper = (arr, start, end) => {
	if (start >= end) return;
	let pivot = Math.floor(Math.random() * (end - start + 1) + start);
	swap(arr, start, pivot);
	let lp = start + 1,
		rp = end;
	while (lp <= rp) {
		if (arr[lp] < arr[start]) lp++;
		else if (arr[rp] > arr[start]) rp--;
		else {
			swap(arr, lp, rp);
			lp++;
			rp--;
		}
	}
	swap(arr, start, rp);
	qsHelper(arr, start, rp - 1);
	qsHelper(arr, rp + 1, end);
};
