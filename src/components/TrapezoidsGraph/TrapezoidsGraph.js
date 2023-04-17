import React, { useEffect, useMemo } from 'react';
import Plot from 'react-plotly.js';

export default function TrapezoidsGraph({ a, b, n, f }) {
  const x = useMemo(() => {
    const xValues = [];
    for (let i = 0; i <= n; i++) {
      xValues.push(a + (b - a) * i / n);
    }
    return xValues;
  }, [a, b, n]);

  const y = useMemo(() => {
    return x.map((xi) => {
      const expr = f.replace(/x/g, xi);
      return eval(expr);
    });
  }, [x, f]);

  let area = 0;
  const trapezoidTraces = [];
  for (let i = 1; i <= n; i++) {
    const xi = x[i];
    const xi_1 = x[i-1];
    const yi = y[i];
    const yi_1 = y[i-1];
    const trace = {
      x: [xi_1, xi, xi, xi_1],
      y: [0, 0, yi, yi_1],
      type: 'scatter',
      mode: 'lines',
      name: 'Trapezoids',
      line: { width: 1 },
      fill: 'tozeroy'
    };
    trapezoidTraces.push(trace);
    area += (yi_1 + yi) * (xi - xi_1) / 2;
  }

  const functionTrace = {
    x: x,
    y: y,
    type: 'scatter',
    mode: 'lines',
    name: 'Function'
  };

  const data = [functionTrace, ...trapezoidTraces];
  const layout = { title: `Grafico de trapecios y funcion` };

  return <Plot data={data} layout={layout} />;
}


