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