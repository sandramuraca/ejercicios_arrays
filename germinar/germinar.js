/*DefinΓ­ una funciΓ³n germinar que tome por parΓ‘metro un string de plantines con flores y plantines (π±). El array debe comenzar con una flor. La funciΓ³n debe devolver un string con los plantines convertidos en flores. El plantΓ­n se debe convertir en la primera flor que encuentre a su izquierda. Ejemplo:

 germinar('π·π±π»π±πΈπ±π·π±π»π±πΈπ±')
'π·π·π»π»πΈπΈπ·π·π»π»πΈπΈ'
 germinar('π·π±π±π±π»π±π±πΈπ±π±π±π±')
'π·π·π·π·π»π»π»πΈπΈπΈπΈπΈ'
 germinar('π»πΈπ±π·π»π±π±π·π·π±π±π±')
'π»πΈπΈπ·π»π»π»π·π·π·π·π·'

pasos:
1. declarar la funcion
2. dentro de la funcion armar el array vacio donde se van a ir acomodanto en lugar de los plantines la flor que esta a la izquierda de los plantines

*/

const germinar = (cosecha) => {
    const plantin = "π±";
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

console.log(germinar('π·π±π»π±πΈπ±π·π±π»π±πΈπ±'));