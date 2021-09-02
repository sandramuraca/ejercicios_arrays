/*Definí una función contiene que reciba como argumentos un número numero y un array de números numeros y devuelva si el número se encuentra en dicho array.

 contiene(54, [5, 7, 99, 3, 4, 54, 2, 12])
true
 contiene(103, [5, 7, 99, 3, 4, 54, 2, 12])
false
1. crear una funcion
2. dentro de la funcion crear un ciclo que recorra el array y encuentre si el numero a buscar esta en el array
3. retornar true o false
*/

const contiene = (numeroAEncontrar, numeros) =>{
    for (const numero of numeros){

        if(numeroAEncontrar === numero){
            
            return true
        }
    } 
    return false
}

console.log(contiene(54, [5, 7, 99, 3, 4, 54, 2, 12]));
console.log(contiene(103, [5, 7, 99, 3, 4, 54, 2, 12]));