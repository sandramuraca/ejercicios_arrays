/*Definí una función recortar que reciba como argumentos un número cantidadLetras y un array de strings palabras y devuelva un array con las mismas palabras pero recortadas. Las palabras se recortan dejando cantidadLetras letras al iniciando, y recortando las demás. Por ejemplo, elefante recortada a 4 letras queda elef.

 recortar(4, ['elefante', 'dinosaurio', 'chocolate', 'avion', 'america'])
['elef', 'dino' 'choc', 'avio', 'amer']
 recortar(1, ['algoritmo', 'bug', 'compilador'])
['a', 'b', 'c']
*/

const recortar = (cantidadDeLetras, palabras) =>{
    resultado = []
    for (let i = 0; i < palabras.length; i++) {
        let palabraRecortada = palabras[i].slice(0, cantidadDeLetras)
        resultado.push(palabraRecortada)
    }


    return resultado
}

console.log(recortar(4, ['elefante', 'dinosaurio', 'chocolate', 'avion', 'america']))
console.log(recortar(1, ['algoritmo', 'bug', 'compilador']))
