export function calcularRectangulos(a, b, n, func) {
	let h = (b - a) / n;
	let suma = 0;
	for (let i = 0; i < n; i++) {
		let xi = a + i * h;
		let fxi = eval(func.replace("x", xi));
		suma += fxi;
	}
	return suma * h;
}
