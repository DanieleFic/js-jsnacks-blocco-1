/*JSnack 2
Fai inserire un numero, che chiameremo N, all’utente.
Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
Ogni volta che ne crei uno, stampalo a schermo. */


let N = prompt("inserici numero");

for(let i = 0; i < N; i++){
    let myArray = [];

    for (index= 0; index < 10; index++){
        myArray.push(Math.floor((Math.random() * 100)+1)) ;
        
    }
    console.log(myArray)
};




