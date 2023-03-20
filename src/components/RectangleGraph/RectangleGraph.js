import React from "react";
import Plot from "react-plotly.js";

export default function RectangleGraph(props) {
	const xValues = [];
	const yValues = [];
	const dx = (props.b - props.a) / props.n;
	let area = 0;

	console.log(props.fn);

	for (let i = props.a; i <= props.n; i++) {
		const x = props.a + i * dx;
		const y = eval(props.fn.replace("x", x));
		xValues.push(x);
		yValues.push(y);
		area += y * dx;
	}

	const functionPlot = {
		data: [
			{
				x: xValues,
				y: yValues,
				type: "scatter",
				mode: "lines+markers",
				marker: { color: "red" },
			},
			{
				x: xValues,
				y: yValues,
				type: "bar",
				marker: { color: "blue" },
				opacity: 0.5,
				width: dx,
			},
		],
		layout: {
			width: 500,
			height: 500,
			title: "Grafico de funcion y rectangulo",
			xaxis: {
				title: "x",
			},
			yaxis: {
				title: "f(x)",
			},
		},
	};

	return <Plot data={functionPlot.data} layout={functionPlot.layout} />;
}
