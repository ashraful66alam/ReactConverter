import React from "react";
import Weight from "./Weight";
import { decide, toLBS, toKG } from "../lib/Converter";
export default class Calculator extends React.Component {
	state = {
		weight: "",
		scale: "KG",
	};
	handleWeightChange = (e, scale) => {
		this.setState({
			weight: e.target.value,
			scale: scale,
		});
	};
	render() {
		const { weight, scale } = this.state;
		const weightInLBS = scale === "KG" ? decide(weight, toLBS) : weight;
		const weightInKG = scale === "LBS" ? decide(weight, toKG) : weight;

		return (
			<>
				<fieldset>
					<h1>Weight Converter</h1>

					<Weight
						scale="KG"
						weight={weightInKG}
						handleWeightChange={this.handleWeightChange}
					></Weight>
					<Weight
						scale="LBS"
						weight={weightInLBS}
						handleWeightChange={this.handleWeightChange}
					></Weight>
				</fieldset>
			</>
		);
	}
}
