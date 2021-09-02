//Mostrar en consola - Dado un array de 10 números, mostrar cada uno en consola.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numeros)

//Mostrar solo mayores a 5- Dado un array de 10 números, mostrar solo los que son mayores a 5 en consola.

const otrosNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const caca = [10, 20, 1, 3]

const mayoresACinco = (array) =>{
   
    for (let i = 0; i < array.length; i++) {
        
        if(array[i] > 5){
           console.log(array[i])
        }
    }
}

mayoresACinco(otrosNumeros)
mayoresACinco(caca)


//Números positivos - Dado un array de 10 números, retornar un numero que represente cuantos de ellos son positivos.
const datos = [-1, 2, -3, 49, -50, 4, -80, 3, -9, 10]

const numerosPositivos = (array) =>{
   
    for (let i = 0; i < array.length; i++) {
        
        if(array[i] > 0){
           console.log(array[i])
        }
    }
}
numerosPositivos(datos)

//Promedio de un curso - Dado un array de 3 numeros, donde cada número representa la nota de una alumna, retornar el promedio final de nota del curso.

const notas = [7, 8, 9]
const notas2 = [5, 9, 10, 8, 7, 3]

const promedioCurso = (array) =>{
    let contador = 0
    for (let i = 0; i < array.length; i++) {
        contador += array[i]
    }
    return (contador / array.length)
}

console.log(promedioCurso(notas))
console.log(promedioCurso(notas2))

//Promedio de promoción- Dado un array de 10 numeros, donde cada número representa la nota de una alumna, retornar el promedio tomando solo aquellas que tienen una nota mayor a 7

const otrasNotas = [2, 6, 7, 9, 10, 8, 4, 6, 3, 1]

const promedioPromocion = (array) => {
    let resultado = 0
    let mayoresA7 = 0

    for (let i = 0; i < array.length; i++) {
         if ( array[i] >= 7){
            resultado += array [i] // es igual a --> resultado = resultado + array [i]
            mayoresA7++ // // es igual a --> mayoresA7 = mayoresA7 + 1
        }      
    }
    return resultado / mayoresA7
}

console.log(promedioPromocion(otrasNotas))


//Temperatura más alta - Dado un array de cualquier longitud, compuesto por numeros que representan temperaturas de una región, se requiere retornar cuál fue la mayor temperatura.