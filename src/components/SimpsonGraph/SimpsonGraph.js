import React from "react";
import Plot from "react-plotly.js";

export default function SimpsonGraph(props) {
	const xValues = [];
	const yValues = [];
	const dx = (props.b - props.a) / props.n;

	for (let i = 0; i <= props.n; i++) {
		const x = props.a + i * dx;
		const y = eval(props.fn.replace("x", x));

		xValues.push(x);
		yValues.push(y);
	}

	// const integral = calculateSimpsonIntegral(xValues, yValues, dx);

	const functionPlot = {
		data: [
			{
				x: xValues,
				y: yValues,
				type: "scatter",
				mode: "lines",
				fill: "tozeroy",
				line: {
					color: "blue",
				},
				name: "Function",
			},
		],
		layout: {
			width: 600,
			height: 600,
			title: "Grafico",
			xaxis: {
				title: "x",
			},
			yaxis: {
				title: "f(x)",
			},
			// annotations: [
			//   {
			//     x: props.a + (props.b - props.a) / 2,
			//     y: Math.max(...yValues),
			//     text: `Integral: ${integral}`,
			//     showarrow: false,
			//     font: {
			//       size: 14,
			//       color: "black",
			//     },
			//   },
			// ],
		},
	};

	return <Plot data={functionPlot.data} layout={functionPlot.layout} />;
}
