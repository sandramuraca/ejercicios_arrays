/*Definí una función sumar que reciba como argumento un array de números numeros y devuelva la suma de ellos. Ejemplo:
sumar([5, 7, 10, 12, 24])
58

Pasos:
1. armar la funcion
2. dentro de la funcion armar un ciclo que recorra el array y sume todos sus elementos 
3. retornar el resultado de la suma
*/

const numerosASumar = [5, 7, 10, 12, 24];

const sumar = (numeros) =>{
    let resultado = 0;
    for(const numero of numeros){
        resultado = resultado + numero
    }
    return resultado
}
// vuelta 1 = resultado 0 numero 5 = 0+5
// vuelta 2 = resultado 5 numero 7 = 5+7=12
// vuelta 3 = resultado 12 numero 10 = 12+10=22

console.log(sumar(numerosASumar));