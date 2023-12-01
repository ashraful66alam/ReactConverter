export function toLBS(weight) {
	return weight * 2.2;
}
export function toKG(weight) {
	return weight / 2.2;
}

export function decide(weight, fname) {
	const input = parseFloat(weight);

	if (Number.isNaN(input)) {
		return "";
	} else {
		const output = fname(weight);
		const roundedOutput = Math.round(output * 1000) / 1000;
		return roundedOutput.toString();
	}
}
