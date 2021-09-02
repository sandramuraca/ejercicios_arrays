/*Definí una función separar que tome por parámetro un string con emojis de perros y gatos y devuelva un string con los perros agrupados por un lado y los gatos por otro.

 separar('🐶🐱🐶🐱🐱🐶🐶') // return '🐶🐶🐶🐶🐱🐱🐱'

Pasos:
1. crear un array vacio
2. definir funcion que se llame separar
3. detro de la funcion crear un ciclo que recorra el array y que y que identifique si es un perro o un gato 
4. si es perro o gato los acomode dentro del array vacio con unshift o con push
nota: emojisOrdenados se crea dentro de la funcion para que no cause problemas con otras funciones
*/
const animales = ["perro", "gato", "perro", "gato", "perro", "perro", "gato"]
/*/
const separar = (palabras) =>{

    let palabrasOrdenadas = [];
    for(const palabra of palabras){
        if(palabra === "perro"){
            palabrasOrdenadas.unshift(palabra);
        } else{
            palabrasOrdenadas.push(palabra);
        }
    }
    return palabrasOrdenadas;
}
*/
const separar = (palabras) =>{

    let palabrasOrdenadas =[]
    
    for (let i = 0; i < palabras.length; i++) {
    
    if(palabras[i] === "perro"){
        palabrasOrdenadas.unshift(palabras[i]);
    } else{
        palabrasOrdenadas.push(palabras[i]);
    }
}

 return palabrasOrdenadas
}
    
console.log(separar(animales));