import React from "react";
import Weight from "./Weight";
export default class Calculator extends React.Component {
	state = {
		weight: "",
		scale: "kg",
	};
	handleWeightChange = (e) => {
		this.setState({
			weight: e.target.value,
		});
	};
	render() {
		const { weight, scale } = this.state;

		return (
			<>
				<fieldset>
					<h1>Weight Converter</h1>

					<Weight
						scale="KG"
						weight={weight}
						handleWeightChange={this.handleWeightChange}
					></Weight>
					<Weight
						scale="LBS"
						weight={weight}
						handleWeightChange={this.handleWeightChange}
					></Weight>
				</fieldset>
			</>
		);
	}
}
