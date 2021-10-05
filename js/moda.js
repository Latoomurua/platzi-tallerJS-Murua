lista1 = [1,2,3,4,2,2,3,1,2,1];

const lista1Count = {};

lista1.map(
    function (elemento) {
        if (lista1Count[elemento]){
            lista1Count[elemento] += 1;  
        } else {
            lista1Count[elemento] = 1;
        }
        
    }
)

//Object.entries le podemos dar como argumento el objeto que queremos convertir en un array. 
const lista1Array = Object.entries(lista1Count).sort(function(valorAcumulado, nuevoValor)
{
    valorAcumulado[1] - nuevoValor[1];
})

const moda = lista1Array[lista1Array.length - 1];