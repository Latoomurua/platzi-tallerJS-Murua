    //los parametros de esta funcion van a estar determinados por nuestros usuarios

function calcularMediaAritmetica(lista) {
    //let sumaLista = 0;

    // la variable i va a iniciar como 0, y for se va a ejecutar mientras i sea menor a la cantidad de elementos de la lista de sueldos.
    //vamos a sumarle 1 posicion del index a i cada vez que se ejecute for

//for (let i = 0; i < lista.length; i++) {
//    sumaLista = sumaLista + lista[i];
//}

//Esta es una forma distinta de hacerla con el metodo .reduce en los arrays (en vez del ciclo for)
const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento
    }
);
    //promedio de nuestra lista de sueldos

const promedioLista = sumaLista / lista.length;

//ej calcularMediaAritmetica ([1,242,24141,122133])
return promedioLista;
}