let somma = 0;

for (let i= 0; i < 10; i++ ) {

    let numbers = Number(prompt("Inserisci un numero"));
    
    somma += numbers;

}

let totale = somma;

document.getElementById("totale").innerHTML = totale;
