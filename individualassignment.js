/* Print 0 to 4 number on the console */

for (let count = 0; count<5; count++){
   console.log("Number:" + count);
}
  
// multiple varaiables

for (let i = 0, j = 5; i<5; i++, j--){
    console.log(i + " and " + j); // print i && j
}


function count(i,j){
    return (i + j) / 2; // return avaerage of two numbers
}

console.log(count(4,1)); // call function


let x = 2.5, j = 1
console.log(x > j);
console.log(x < j);
console.log(x == j);
