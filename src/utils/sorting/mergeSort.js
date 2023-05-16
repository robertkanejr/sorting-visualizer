export default function mergeSort(arr) {
	const mid = Math.floor(arr.length / 2),
		leftHalf = arr.slice(0, mid),
		rightHalf = arr.slice(mid);
	return arr.length <= 1 ? arr : merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

const merge = (left, right) => {
	let lp = 0,
		rp = 0,
		auxArr = [];

	while (lp < left.length && rp < right.length) {
		left[lp] <= right[rp] ? auxArr.push(left[lp++]) : auxArr.push(right[rp++]);
	}
	return [...auxArr, ...left.slice(lp), ...right.slice(rp)];
};
