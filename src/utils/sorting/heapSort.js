import swap from "../swap";

export default function heapSort(arr) {
	const length = arr.length;
	let lastParent = Math.floor(length / 2 - 1),
		lastChild = length - 1;

	while (lastParent >= 0) heapify(arr, lastParent--, length);

	while (lastChild >= 0) {
		swap(arr, 0, lastChild);
		heapify(arr, 0, lastChild--);
	}
	return arr;
}

const heapify = (arr, root, heapSize) => {
	let larger = root;
	const leftChild = 2 * root + 1,
		rightChild = leftChild + 1;

	if (leftChild < heapSize && arr[larger] < arr[leftChild]) larger = leftChild;
	if (rightChild < heapSize && arr[larger] < arr[rightChild]) larger = rightChild;

	if (root !== larger) {
		swap(arr, root, larger);
		heapify(arr, larger, heapSize);
	}
};
