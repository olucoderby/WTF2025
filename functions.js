const GIVE_AWAY = {
    balance: 10000,
    currency: "USD",
};

const user = {
    name: "Deborah",
    balance: 0,
    email: "debby@gmail.com",
    currency: "USD",
};

const loginEmail = prompt("Enter your email")
const loginPassword = prompt("Enter your password")

if(user.email == loginEmail) {
    // Add code to execute when the email matches
}

const user1 = {
  name: "Luke Yang",
  balance: 0,
  email: "luke",
  currency: "USD",
};

const user2 = {
  name: "KI Yang",
  balance: 0,
  email: "luke",
  currency: "NGN",
};
const user3 = {
  name: "HUs Yang",
  balance: 0,
  email: "luke",
  currency: "EUR",
};

function currencyConverter(amount, fromCurrency) {
  const USD = 1;
  const EUR = 0.9;
  const NGN = 1600;
  let amountConvert = 0;
  if (fromCurrency === "USD") {
    amountConvert = USD;
  }
  if (fromCurrency === "EUR") {
    amountConvert = EUR;
  }
  if (fromCurrency === "NGN") {
    amountConvert = NGN;
  }
  const result = amount * amountConvert;
  return result;
}

user.balance = currencyConverter(GIVE_AWAY.balance, user.currency);
console.log(user);

user2.balance = currencyConverter(GIVE_AWAY.balance, user2.currency);
console.log(user2);

user3.balance = currencyConverter(GIVE_AWAY.balance, user3.currency);
console.log(user3);
 
// Functions + Array + Loops + Comments

const number1 = 50
const number2 = 100
if(number1 > number2){
    console.log(number1)
} else if(number1 < number2){
    console.log(number2)
} else {
    console.log('same number')
}

function maxNumber(num1, num2){
    if(num1 > num2){
        console.log(num1)
    } else if(num1 < num2){
        console.log(num2)
    } else {
        return num2
    }
}



const numb1 = maxNumber(12,2)
const numb2 = maxNumber(12,102)
console.log({})