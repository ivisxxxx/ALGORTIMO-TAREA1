//14.Dado un arreglo de 5 elementos, presentar el primero, el del medio y el ultimo
//entrada:arreglo=0(leer ) elementos ==(calculado)
//Proceso:
//arreglo = [valor1, valor2, valor3, valor4, valor5]

// Presentar el primer elemento
//mostrar("El primer elemento es: " + arreglo[0])

// Presentar el elemento del medio
//indice_medio = longitud(arreglo) / 2
//mostrar("El elemento del medio es: " + arreglo[indice_medio])

// Presentar el último elemento
//mostrar("El último elemento es: " + arreglo[longitud(arreglo) - 1])
//Salida:los 5 elementos

//Algoritmo:
// Definir el arreglo de 5 elementos
//arreglo = [valor1, valor2, valor3, valor4, valor5]

// Presentar el primer elemento
//mostrar("El primer elemento es: " + arreglo[0])

// Presentar el elemento del medio
//indice_medio = longitud(arreglo) / 2
//mostrar("El elemento del medio es: " + arreglo[indice_medio])

// Presentar el último elemento
//mostrar("El último elemento es: " + arreglo[longitud(arreglo) - 1])
//FinalAlgoritmo:
const read = require('prompt-sync')();
const write = console.log
//se crea una funcion
function elementosPrimerMedioyULtimo(){
// Definir el arreglo
const arreglo = [1, 2, 3, 4, 5];

// Obtener el primer elemento
const primero = arreglo[0];

// Obtener el elemento del medio
const medio = arreglo[Math.floor(arreglo.length / 2)];

// Obtener el último elemento
const ultimo = arreglo[arreglo.length - 1];

// Imprimir los resultados
write("El primer elemento es:", primero);
write("El elemento del medio es:", medio);
write("El último elemento es:", ultimo);
}
elementosPrimerMedioyULtimo()