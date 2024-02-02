let somma = 0;
let media = 0;

for (let i= 1; i <= 10; i++ ) {
    
    somma += i;
    
    console.log(somma);
}

media = somma / 10;

document.getElementById("somma").innerHTML = somma;

document.getElementById("media").innerHTML = media;




