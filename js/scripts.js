// 1. Chiedo all'utente quanti km vuole percorrere
const km = prompt('Quanti kilometri vuoi che sia lungo il tuo viaggio?');
console.log('Km:', km);

// 2. Chiedo all'utente quanti anni ha
const age = prompt('Quanti anni hai?');
console.log('Età:', age);

// 3. Fisso la variabile con il prezzo del biglietto al Km
const priceKm = 0.21;
console.log('Prezzo biglietto al Km:', priceKm, '€');

// 4. Calcolo il prezzo pieno del biglietto
const price = km * priceKm;
console.log('Costo del biglietto:', price, '€');

let finalPrice = price;

if(age < 18) {
    finalPrice = ((price / 100) * 80).toFixed(2);
}
else if(age >= 65) {
    finalPrice = ((price / 100) * 60).toFixed(2);
}

console.log('Costo biglietto con sconto:', finalPrice, '€');

document.getElementById('km').innerHTML = 'Hai scelto di percorrere: ' + km + 'km';
document.getElementById('price').innerHTML = 'Il prezzo del tuo biglietto è: ' + price + ' €';
document.getElementById('finalPrice').innerHTML = 'Il prezzo scontato del tuo biglietto è: ' + finalPrice + ' €';
