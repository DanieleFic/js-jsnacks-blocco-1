/*JSnack 1
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
Continua a chiedere i numeri all’utente e a inserirli nell’array fino 
aquando la somma degli elementi è minore di 50. */

let arrayVuoto = []; //creo l' array vuoto
let sommaNumeri = 0 ;
let i = 0 ;

do {
    //condizione da eseguire 
    let numeriUtente = parseInt(prompt("inserici numero")); //creo una variabile che chiede all utente di inserire i numeri tramite prompt
    arrayVuoto.push(numeriUtente) //pusho i numeri chiesti dall utente nell array
    sommaNumeri = sommaNumeri +numeriUtente
    

    //istruzioni per terminare il ciclo 
  } while (sommaNumeri < 50 ); // il ciclo si ferma quando il risultato dei numeri dell array diventa 50
  
console.log(arrayVuoto) //console log per vedere i numeri che sono stati pushati nel array
console.log(sommaNumeri) //console log per vedere i numeri dell array sommati
document.getElementById("demo").innerHTML = sommaNumeri;





























