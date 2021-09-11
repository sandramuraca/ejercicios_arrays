/*Definí una función sonIguales(a, b) que reciba como argumentos dos arrays a y b y devuelva si ambos arrays tienen los mismos valores en la misma posición.

 sonIguales([10, 25, 6, 33, 48, 105], 
            [10, 25, 6, 33, 48, 105])
true
 sonIguales([19, 25, 6, 33, 48, 105], 
            [11, 25, 6, 33, 48, 105])
false
 sonIguales([10, 25, 6, 33, 48, 105], 
            [25, 10, 6, 33, 48, 105])
false
*/
 const sonIguales = (a, b) =>{

    for (let i = 0; i < a.length; i++) {
        if(a[i]=== b[i]){
            return true
        } else {
            return false
        }
    }
}

console.log(sonIguales([10, 25, 6, 33, 48, 105], [10, 25, 6, 33, 48, 105]))
console.log(sonIguales([19, 25, 6, 33, 48, 105], [11, 25, 6, 33, 48, 105]))
console.log(sonIguales([10, 25, 6, 33, 48, 105], [25, 10, 6, 33, 48, 105]))