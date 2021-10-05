function calcularMediaAritmetica(lista) {
const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento
    }
);

const promedioLista = sumaLista / lista.length;
return promedioLista;
}

const lista = [444, 222, 666, 500000000]
lista.sort (comparacion)

//deberia salir el numero 400 que es la mitad de la lista
const mitadLista = parseInt(lista.length / 2);

function esPar (numerito) {
    
// si el modulo de numerito dividido entre 2 es 0, no nos va a dar decimales o residuos. daria false    
    if (numerito % 2 === 0) {
        return true
    }
    else {
        return false
    }
}

let mediana;

if (esPar(lista.length)) {
    const elemento1 = lista[mitadLista - 1  ];
    const elemento2 = lista[mitadLista];
    const elemento12 = calcularMediaAritmetica ([
        elemento1,
        elemento2,
    ]);


mediana = elemento12;

} else {
    mediana = lista[mitadLista];
}

function comparacion (a,b) {
    return a - b;
}
///tengo que organizar las arrays. proxima clase