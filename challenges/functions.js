// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function highOrderFunction (param1, param2, cb){
  return cb(param1, param2);
}  


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

  function add(a, b){
      return a + b;
  }

  function multiply(a, b){
      return a * b;
  }

  function greeting(first, last){
      return `Hello ${first} ${last} nice to meet you`;
  }

  function consume (cb) {
    console.log (cb);
  }


/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(highOrderFunction(2,2,add)); // 4
consume(highOrderFunction(10,16,multiply)); // 160
consume(highOrderFunction("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 


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