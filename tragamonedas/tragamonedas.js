/*
Definí una función gano que reciba como argumento un array tragamonedas  con 5 símbolos y nos indique si son iguales. Si el array tiene más de 5 símbolos, sólo debe comparar los 5 primeros.

 gano(['⭐ '⭐️', '⭐️', '💫', '✨']) // 
false
 gano(['💫', '💫', '💫', '💫', '💫']) 
true
 gano(['💫', '💫', '💫', '💫', '💫', '⭐️']) */

 const  gano = (tragamonedas) => {
    let contador=0;
    for (let i = 0; i <= 4; i++){
        if( tragamonedas [i] === tragamonedas [0]){
            contador++
        }
    }
    if(contador===5){
        return true
    } else{
        return false
    }
 }

console.log( gano(['⭐', '⭐️', '⭐️', '💫', '✨']));
console.log( gano(['💫', '💫', '💫', '💫', '💫']));
console.log( gano(['💫', '💫', '💫', '💫', '💫', '⭐️']));