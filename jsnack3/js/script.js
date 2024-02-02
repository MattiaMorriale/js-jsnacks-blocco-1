const dispari = [];

const pari = [];

let numbers;

for (let i= 0; i < 6; i++ ) {

    numbers = Number(prompt("Inserisci un numero"));
    
    if (numbers % 2 !== 0) {

        dispari.push(numbers);
    
    } else {

        pari.push(numbers);

    }

}

document.getElementById("dispari").innerHTML = dispari;

document.getElementById("pari").innerHTML = pari;


