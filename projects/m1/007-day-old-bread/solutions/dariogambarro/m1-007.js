const price = 3.49;
const discount = 0.6;
let oldUnit = +prompt('How many units of old bread?');
let regPrice;
let discPrice;
let totPrice;

regPrice = oldUnit * price;
discPrice = regPrice - (regPrice * discount);
totPrice = oldUnit * (discount * price); 

console.log (`The regular price is ${regPrice} euro; the discount is ${discPrice} euro; the total price is ${totPrice} euro.`);