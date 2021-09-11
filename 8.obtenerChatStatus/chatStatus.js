/*Definí una función obtenerChatStatus que reciba como argumento un array de strings usuarias y devuelva un string con el status del chat. Las reglas son:

Para una usuaria, debe mostrar: NOMBRE_USUARIA_1 está conectada
Para dos usuarias, debe mostrar: NOMBRE_USUARIA_1 y NOMBRE_USUARIA_2 + están conectadas
Para más de dos usuarias, debe mostrar: NOMBRE_USUARIA_1, NOMBRE_USUARIA_2 y X persona(s) más están conectadas
 obtenerChatStatus(['Ada'])
'Ada está conectada'
 obtenerChatStatus(['Ada', 'Grace'])
'Ada y Grace están conectadas'
 obtenerChatStatus(['Ada', 'Grace', 'Marie'])
'Ada, Grace y 1 persona(s) más están conectadas'
*/

// el array devuelve la cantidad d eusuarios conectados
// array.length = 1 --> retornar nombre del usuario1(array[0]) + string "esta conctado"
// array.length = 2 --> retornar nombre del usuario1 + nombre del usuario2 (array[0] y array[1])  + string "eestan conectados"
// array.length > 2  --> retornar nombre del usuario1 + nombre del usuario2 (array[0] y array[1])  + array.length -2 + string "estan conectados"


const obtenerChatStatus = (usuarias) =>{
    
    let restoUsuarias = usuarias.length -2

    if(usuarias.length === 1){
        return usuarias[0] + " esta conectada"
    } else if (usuarias.length === 2){
        return usuarias[0] + " y " + usuarias[1] + " estan conectadas"
    } else if (usuarias.length > 2){
        return usuarias[0] + ", " + usuarias[1] + " y " + restoUsuarias + " estan conectadas"
    }
}

console.log(obtenerChatStatus(['Ada']))
console.log(obtenerChatStatus(['Ada', 'Grace']))
console.log(obtenerChatStatus(['Ada', 'Grace', 'Marie']))