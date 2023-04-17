import React from "react";
import Plot from "react-plotly.js";

export default function RectangleGraph(props) {
	const xValues = [];
	const yValues = [];
	const dx = (props.b - props.a) / props.n;

	console.log(props.fn);

	for (let i = 0; i <props.n; i++) {
		const x = props.a + (i * dx);
		const y = eval(props.fn.replace("x", x));
		const width = dx;

		xValues.push(x, x + width, x + width, x, x);
		yValues.push(0, 0, y, y, 0);
	}

	const curveXValues = [];
	const curveYValues = [];

	// Iterate through each point on the curve and add it to the arrays
	for (let x = props.a; x <=props.b; x += 0.01) {
		curveXValues.push(x);
		curveYValues.push(eval(props.fn.replace("x", x)));
	}

	const functionPlot = {
		data: [
			{
			  x: xValues,
			  y: yValues,
			  type: 'scatter',
			  mode: 'lines',
			  fill: 'tozeroy',
			  line: {
				color: 'blue'
			  },
			  name: 'Rectangles'
			},
			{
			  x: curveXValues,
			  y: curveYValues,
			  type: 'scatter',
			  mode: 'lines',
			  line: {
				color: 'red'
			  },
			  name: 'Curve'
			}
		  ],
		layout: {
			width: 600,
			height: 600,
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
