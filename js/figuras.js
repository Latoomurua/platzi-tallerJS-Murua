//CODIGO DEL CUADRADO

// perimetro del cuadrado

function perimetroCuadrado (lado) {
    return lado * 4;
}

// area del cuadrado

function areaCuadrado (lado) {
   return lado * lado;
}

//CODIGO DEL TRIANGULO

//perimetro del Triangulo
function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
}

//area del triangulo
function areaTriangulo (baseT, alturaT) {
    return (baseT * alturaT) / 2;
}

//CODIGO CIRCULO

//radio de un circulo

//diametro
function diamentroCirculo (radio) {
    return radio * 2;
    
}
//PI
const PI = Math.PI;

//circunferencia
function perimetroCirculo (radio) {
    const diametro = diametroCirculo (radio);
    return diametro * PI;

}

//area circulo
function areaCirculo (radio) {
    (radio * radio) * PI;
}


//INTERACTUAMOS CON HTML


//Queremos que cuando apreten el boton calcular perimetro queremos que se llame a una funcion en JS.
//creamos la funcion
// luego nos comunicamos con HTML a trave del ID que pusimos en input
// guardamos el VALOR en otra variable (value)
// luego creamos otra const pero esta vez para calcular el perimetro del cuadrado con los parametros que nos ingresen los usuarios en value
function calcularPerimetroCuadrado () {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

//Queremos que cuando apreten el boton calcular area queremos que se llame a una funcion en JS.
//creamos la funcion
// luego nos comunicamos con HTML a trave del ID que pusimos en input
// guardamos el VALOR en otra variable (value)
// luego creamos otra const pero esta vez para calcular el area del cuadrado con los parametros que nos ingresen los usuarios en value
function calcularAreaCuadrado () {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}

//CALCULAR LA ALTURA DE UN TRIANGULO ISOSCELES

function alturaTI (base, lados) {
    const resultadoA = (Math.sqrt((base**2 - (lados**2 / 4))));
    return ("La altura del triangulo es : " + resultadoA);
}