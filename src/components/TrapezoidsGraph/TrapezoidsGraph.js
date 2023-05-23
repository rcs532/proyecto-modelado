import React from "react";
import Plot from "react-plotly.js";

export default function TrapezoidsGraph(props) {
	const xValues = [];
	const yValues = [];
	const dx = (props.b - props.a) / props.n;

	for (let i = 0; i < props.n; i++) {
		const xi = props.a + i * dx;
		const xi_1 = xi + dx;
		const yi = eval(props.f.replace(/x/g, xi));
		const yi_1 = eval(props.f.replace(/x/g, xi_1));

		xValues.push(xi, xi_1, xi_1, xi, xi);
		yValues.push(0, 0, yi_1, yi, 0);
	}

	const curveXValues = [];
	const curveYValues = [];

	for (let x = props.a; x <= props.b; x += 0.01) {
		curveXValues.push(x);
		curveYValues.push(eval(props.f.replace(/x/g, x)));
	}

	const trapezoidTrace = {
		x: xValues,
		y: yValues,
		type: "scatter",
		mode: "lines",
		fill: "tozeroy",
		line: {
			color: "blue",
		},
		name: "Trapezoids",
	};

	const functionTrace = {
		x: curveXValues,
		y: curveYValues,
		type: "scatter",
		mode: "lines",
		line: {
			color: "red",
		},
		name: "Function",
	};

	const data = [trapezoidTrace, functionTrace];

	const layout = {
		width: 600,
		height: 600,
		title: "Graph of Trapezoids and Function",
		xaxis: {
			title: "x",
		},
		yaxis: {
			title: "f(x)",
		},
	};

	return <Plot data={data} layout={layout} />;
}
