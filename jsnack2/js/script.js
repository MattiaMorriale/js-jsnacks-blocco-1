let somma = 0;

let numbers;

for (let i= 0; i < 10; i++ ) {

    numbers = Number(prompt("Inserisci un numero"));
    
    somma += numbers;

}

let totale = somma;

document.getElementById("totale").innerHTML = totale;
