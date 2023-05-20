const randomVals = (min, max) => {
	let randomVal = Math.floor(Math.random() * (max - min + 1) + min);
	return randomVal;
};

export const randomizeArray = (arrayLength) => {
	// for (let i = 0; i < array.length; i++) {
	// 	let bar = document.getElementById(i).style;
	// 	bar.backgroundColor = "#ff7f50";
	// }
	const arr = [];
	for (let i = 0; i < arrayLength; i++) arr.push(randomVals(20, 400));
	return arr;
};
