/*Definí una función germinar que tome por parámetro un string de plantines con flores y plantines (🌱). El array debe comenzar con una flor. La función debe devolver un string con los plantines convertidos en flores. El plantín se debe convertir en la primera flor que encuentre a su izquierda. Ejemplo:

 germinar('🌷🌱🌻🌱🌸🌱🌷🌱🌻🌱🌸🌱')
'🌷🌷🌻🌻🌸🌸🌷🌷🌻🌻🌸🌸'
 germinar('🌷🌱🌱🌱🌻🌱🌱🌸🌱🌱🌱🌱')
'🌷🌷🌷🌷🌻🌻🌻🌸🌸🌸🌸🌸'
 germinar('🌻🌸🌱🌷🌻🌱🌱🌷🌷🌱🌱🌱')
'🌻🌸🌸🌷🌻🌻🌻🌷🌷🌷🌷🌷'

pasos:
1. declarar la funcion
2. dentro de la funcion armar el array vacio donde se van a ir acomodanto en lugar de los plantines la flor que esta a la izquierda de los plantines

*/

const germinar = (cosecha) => {
    const plantin = "🌱";
    let plantaAnterior = '';
    let huerta = '';

    for(const planta of cosecha){
        if(planta !== plantin){
            plantaAnterior = planta;
            huerta = huerta + planta;
        }else{
            huerta = huerta + plantaAnterior;
        }
    }
    return huerta;
}

console.log(germinar('🌷🌱🌻🌱🌸🌱🌷🌱🌻🌱🌸🌱'));