const bankAccount = [];

const addBankAccount = (name, balance) => {
  const account = { name: name, balance: balance }; // local variable (local scope)
  bankAccount.push(account); // global variable // global scope
};

function bankTransfer(sender, receiver, amount) {
  const senderAccount = bankAccount.find(function (account) {
    if (account.name === sender) {
      return true;
    }
    return false;
  });
  const receiverAccount = bankAccount.find(function (account) {
    if (account.name === receiver) {
      return true;
    }
    return false;
  });
  console.log("Sender Account", senderAccount)
  console.log("Receiver Account", receiverAccount)
}

console.log(bankAccount.length, "before adding");
addBankAccount("Mike", 202);
addBankAccount("Luke", 202);
addBankAccount("Princess", 100000);
console.log(bankAccount.length, "after adding");
console.log(bankAccount, "view");

bankTransfer("Mike", "Lukes", 100);

// Q1. Implement a simple add to cart feature.
// Q2. Implement a simple todo items list