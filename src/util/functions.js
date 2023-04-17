export function calcularRectangulos(a, b, n, func) {
	let h = (b - a) / n; // altura de cada rectangulo
	let suma = 0; // suma de las areas de los rectangulos
	for (let i = 0; i < n; i++) { // iteramos sobre cada rectangulo
		let xi = a + (i * h); // xi es el punto de inicio de cada rectangulo
		let fxi = eval(func.replace("x", xi)); // f(xi) es el valor de la funcion en el punto xi
		suma += fxi; // sumamos el valor de la funcion en el punto xi
	}
	return suma * h; // multiplicamos la suma por la altura de cada rectangulo
}

export function calcularTrapecios(a, b, n, func) {
	
	const deltaX = (b - a) / n; //calculamos el ancho de cada trapecio
	
	// Initialize the sum to the height of the first and last rectangles
	let sum = (eval(func.replace("x", a)) + eval(func.replace("x", b))) / 2;

	//iteramos sobre cada trapecio
	for (let i = 1; i < n; i++) {
	  const x = a + (i * deltaX); //calculamos el punto medio de cada trapecio
	  const y = eval(func.replace("x", x)); //calculamos el valor de la funcion en el punto medio
	  sum += y; //sumamos el valor de la funcion en el punto medio
	}
	
	const integral = sum * deltaX; //multiplicamos la suma por el ancho de cada trapecio
	return integral; //retornamos el valor de la integral
}


