/*Definí una función contiene que reciba como argumentos un número numero y un array de números numeros y devuelva si el número se encuentra en dicho array.

 contiene(54, [5, 7, 99, 3, 4, 54, 2, 12])
true
 contiene(103, [5, 7, 99, 3, 4, 54, 2, 12])
false


const contiene = (numeroABuscar,array) =>{

    for(let i=0; i< array.length; i++){
        if(numeroABuscar===array[i]){
            return true;
        }
        else{
            return false;
        }
    }
}

console.log(contiene(54,[5, 7, 99, 3, 4, 54, 2, 12]));*/

const listaParaBuscar = [5, 7, 99, 3, 4, 54, 2, 12]

const contiene = (numeroABuscar,array) => {
    
    for (let i=0 ; i<array.length ; i++) {
        if (numeroABuscar===array[i]) {
            return true
        }
        else
        return false;
    }
}

console.log (contiene(20, listaParaBuscar));