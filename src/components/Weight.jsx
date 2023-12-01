export default function Weight({ weight, handleWeightChange, scale }) {
	return (
		<>
			<input
				type="text"
				value={weight}
				onChange={(e) => {
					handleWeightChange(e, scale);
				}}
			/>
			<p>{scale}</p>
		</>
	);
}
