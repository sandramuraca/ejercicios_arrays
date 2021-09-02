/*
1.Definí una función filtrarPorLongitud que tome por parámetro:
    - un número longitud
    - y un array de strings palabras
2.que devuelva un array con las palabras que tengan una cantidad de letras mayor a longitud. Ejemplo:

 filtrarPorLongitudMayorA(4,['dia','remolacha',
'azul','sorpresa','te','verde',])
['remolacha', 'sorpresa', 'verde']*/

const filtrarPorLongitud = (longitud, palabras) => {

    let longitudMayor = [];

    for(let palabra of palabras){
        if(palabra.length > longitud)
        longitudMayor.push(palabra)
    }
    return longitudMayor;
}

console.log(filtrarPorLongitud(4,['dia','remolacha','azul','sorpresa','te','verde']));
