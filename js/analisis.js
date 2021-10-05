// creamos una lista que solamente tenga salarios

//esta funcion me va a permitir iterar por cada uno de los elementos que estan en el array de colombia.
const salariosColombia = colombia.map(
    function (personasCol) {
        return personasCol.salary;
    }
);

//Necesitamos ordenar nuestros elementos del array

const salariosColSorted = salariosColombia.sort (
    function(salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

//Ahora calcularemos la mediana

function esPar (numerito) {
    return (numerito % 2 === 0);
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento
        }
    );
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
    }

//calcularemos la mediana general
//para sacar la media necesitamos un numero entero, por eso aplicamos parseInt

function medianaSalarios (lista) {
    const mitad = parseInt (lista.length / 2);

//ahora vamos a ver si la lista en este caso de colombia es par o impar
//y le entregamos la lista entera de elementos mediante .length
//recordar que para encontrar a los dos de la mitad, necesitamos ir a la primera, ir a la mitad y restarle 1
    if (esPar(lista.length)) {
        personaMitad1 = lista[mitad - 1];
        personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;

    } else {
        const personaMitad = lista[mitad];
        return personaMitad
    }
}

const medianaGeneralCol = medianaSalarios(salariosColSorted);

//Iniciamos guardando el TOP 10 en una constante
//Muy importante que sea la lista ordenada
//El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
//Le vamos a dar 2 argumentos al array donde el primer argumento es de donde queres que inicie el corte y el segundo cuantos elementos queremos sacar.

//Asi sabemos la cantidad de salarios que hay en colombia y lo multiplicamos por 90, ya que nosotros queremos analizar a ese 10% restante.
//De la cantidad de salarios que hay, le queremos sacar el 10% que es lo restante del spliceStart.
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount= (salariosColSorted.length - spliceStart);

const salariosColT10 = salariosColSorted.splice (
    spliceStart,
    spliceCount,
);

const medianaTop10Col = medianaSalarios(salariosColT10);

//ahora solo llamamos a nuestro salario ordenado
console.log({
    medianaGeneralCol,
    medianaTop10Col,
});

