/*Definí una función invertirCaso que tome por parámetro un string string y devuelva un string donde cada letra tiene el caso invertido, es decir, cada letra está mayúscula si estaba en minúscula, y viceversa.

 invertirCaso('Ada Lovelace') 
'aDA lOVELACE'
 invertirCaso('feliz cumple') 
'FELIZ CUMPLE'
 invertirCaso('jAvAsCrIpT')
'JaVaScRiPt'
*/

//puedo recorrer los stirngs como si fueran arrays
//si --> la letra esta en mayúscula --> la convierto a minuscula
//pusheo a resultado (array vacio)
//si no --> i la letra esta en minuscula --> la convierto a mayuscula
//pusheo a resultado (array vacio)


const invertirCaso = (string) =>{
    let array = []

    for (let i= 0; i < string.length; i++) {
        let letra = string[i]
        
        if(letra.toUpperCase() === letra){
            //la letra esta en mayuscula
            array.push(letra.toLowerCase())
        }
        else{
            //la letra esta en minuscula
            array.push(letra.toUpperCase())
        }
        
    }
    let resultado = array.join("")
    return resultado
}

const invertir1 = invertirCaso('Ada Lovelace')
console.log(invertir1)

const invertir2 = invertirCaso('feliz cumple')
console.log(invertir2)

const invertir3 = invertirCaso('jAvAsCrIpT')
console.log(invertir3)


