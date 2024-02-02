const dispari = [];

const Nms = [];

let numbers = Number(prompt("Inserisci un numero"));


for (let i= 1; i <= numbers; i++ ) {
    
    
    let cubo = i * i * i;
    dispari.push(cubo);

    Nms.push(i);

}

document.getElementById("dispari").innerHTML = dispari;

document.getElementById("Nms").innerHTML = Nms;




