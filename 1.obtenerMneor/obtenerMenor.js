//Definí una función obtenerMenor que tome por parámetro un array de números numeros y devuelva el menor de ellos. Ejemplo:

 //obtenerMenor(5, 7, 99, 34, 54, 2, 12)  -->2

 const lista = [5, 7, 99, 34, 54, 2, 12]
 const lista2 = [13, 20, 915, 4, 30, 88, 90]

 const obtenerMenor = (numeros) =>{
    
    let menor = numeros[0] 
  for (let i = 0; i < numeros.length; i++) {
      if(numeros[i] < menor){
          menor = numeros[i]
      }
  }  
  return menor
}

console.log(obtenerMenor(lista))
//const menor1 = obtenerMenor(lista)
//console.log(menor1)

const menor2 = obtenerMenor(lista2)
console.log(menor2)