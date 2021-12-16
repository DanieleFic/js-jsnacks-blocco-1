/*JSnack 3
Crea due tag div con due id diversi:
un div avrà il testo colorato di rosso mentre l’altro di verde.
Partendo da un array di numeri, stampiamo nell’id rosso
 i numeri dispari e in verde i numeri pari.*/



let divRosso = document.createElement('div')  //creiamo i due div con i style settati su rosso e verde
    divRosso.id = 'red'
    divRosso.classList.add('text-center')
    document.body.appendChild(divRosso)
    
let divGreen = document.createElement('div')
    divGreen.id = 'green'
    divGreen.classList.add('text-center')
    document.body.appendChild(divGreen)
    
let myArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(myArray)

for(let i = 0 ; i < myArray.length ; i++){ //facciamo un ciclo for che prende in esame tutte gli elementi dell array se è dispari,
    if(myArray[i]%2==1){                     //viene stampato nel div  rosso senò gli elementi vengono stampati nel div verde
        divRosso.innerHTML += myArray[i]+ " - ";
    }else{
        divGreen.innerHTML += myArray[i]+ " - ";
    };
};
console.log(divRosso)
console.log(divGreen)
