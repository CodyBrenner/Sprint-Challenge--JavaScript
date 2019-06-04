// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function consume(numberOne, numberTwo, callback){
  return callback(numberOne, numberTwo);
};
// USER CAN ADJUST 10 20 for the PARAMS
consume(10, 20,(numberOne, numberTwo) => 
console.log(`Call Back return param: ${numberOne} and ${numberTwo}`));

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add(numberOne, numberTwo){
  return numberOne + numberTwo;
}

function multiply(numberOne, numberTwo){
  return numberOne * numberTwo;
}

function greeting(firstName, lastName){
  return firstName + " " + lastName;
};



/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation:  Upon Declaring a "varaible" the variable has a scope. Scopes examples can be Local or Global and are within the function. So using closures we can grab something from the outside and use it in that function
// but we cannot get something from within the function to the outside of it.


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();