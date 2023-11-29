export default function Weight({ weight, handleWeightChange, scale }) {
	return (
		<>
			<input type="text" value={weight} onChange={handleWeightChange} />
			<p>{scale}</p>
			{/* <input type="text" value={weight} onChange={handleWeightChange} />
				<p>Lbs</p> */}
		</>
	);
}
