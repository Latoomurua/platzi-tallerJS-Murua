//CODIGO DEL CUADRADO
//CODIGO DEL CUADRADO
//CODIGO DEL CUADRADO

console.group("cuadrado");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

// perimetro del cuadrado

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + ladoCuadrado + "cm");

// area del cuadrado

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + " cm2");

console.groupEnd();

//CODIGO DEL TRIANGULO
//CODIGO DEL TRIANGULO
//CODIGO DEL TRIANGULO

console.group("triangulos");

const ladoTriangulo = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;


console.log("Los lados de mi triangulo miden: " + ladoTriangulo + " cm, " + ladoTriangulo2 + " cm, " + 
baseTriangulo + " cm");

//altura del Triangulo
const alturaTriangulo = 5.5;

console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

//perimetro del Triangulo
const perimetroTriangulo = ladoTriangulo + ladoTriangulo2 + baseTriangulo;

console.log("El perimetro del triangulo es de: " + perimetroTriangulo + "cm");

//area del triangulo
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es de: " + areaTriangulo + " cm2")

console.groupEnd();

//CODIGO CIRCULO
//CODIGO CIRCULO
//CODIGO CIRCULO

console.group("circulos");

//radio
const radioCirculo = 4;
console.log("El radio del circulo es de: " + radioCirculo + " cm")

//diametro
const diamentroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es de: " + diamentroCirculo + " cm")

//PI
const PI = Math.PI;
console.log("PI es igual a: " + PI)

//circunferencia
const perimetroCirculo = diamentroCirculo * PI;
console.log("La circunferencia del circulo es de: " + perimetroCirculo + " cm")

//area circulo
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es de: " + areaCirculo + " cm2")

console.groupEnd;