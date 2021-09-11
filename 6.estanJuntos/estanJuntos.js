/* 
Definí una función estanJuntos que reciba como argumento un array de strings personajes, y devuelva si Sam se encuentra al lado de Frodo, puede encontrarse antes o después.

estanJuntos(['Sam', 'Frodo', 'Legolas']) 
true
estanJuntos(['Aragorn', 'Frodo', 'Sam']) 
true
estanJuntos(['Sam', 'Orco', 'Frodo']) 
false*/

//SI la posicion del for es igual a Sam y la posicion siguiente o anterior a la que estoy analizando es igual a Frodo es true
//SI NO  es false

const estanJuntos = (personajes) =>{

    for (let i = 0; i < personajes.length; i++) {
        
        //console.log(personajes[i])
       if( personajes[i] === "Sam" && personajes[i-1]  === "Frodo" ||  personajes[i+1]  === "Frodo" ){
        return true
       } else{
           return false
       }
    }
}

console.log(estanJuntos(['Sam', 'Frodo', 'Legolas']))
console.log(estanJuntos(['Aragorn', 'Frodo', 'Sam']))
console.log(estanJuntos(['Sam', 'Orco', 'Frodo']))