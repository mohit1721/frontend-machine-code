 
 
/* MAIN Learning of the qn.

Array.prototype is an object where all array methods are defined.
By adding methods to Array.prototype, you can create custom methods that all arrays will have access to.
Why is this useful?
Customization: You can add your own methods for common operations 
that might be used repeatedly across different parts of your code.

*/
function squareB() {
  const result = [];
  this.forEach(element => {
    result.push(Number((element * element).toFixed(10)));
  });
  return result;
}
function squareUsingReduce() {
  return this.reduce((acc, element) => {
    acc.push(Number((element * element).toFixed(10)));
    return acc;
  }, []);
}

function square() {
    // Use `this` to refer to the array calling the method
    // Use map to create a new array with squared values
    console.log("this --> ", this)
    return this.map(element => Number((element * element).toFixed(10)));
    
  
  };
  
  Array.prototype.square = square;

  const numbers = [1, 2, 3];
console.log(numbers.square()); // [1, 4, 9]
  /*
  Array.prototype is a built-in object in JavaScript that contains methods and properties shared by all arrays. 
  Every array in JavaScript automatically inherits from Array.prototype,
   which means it can access all methods and properties defined in Array.prototype.
  */
  /*
  Explanation:
  Prototype Chain: In JavaScript, objects inherit properties and methods from their prototype. 
  For arrays, the prototype is Array.prototype. 
  This is where all the default methods like .map(), .filter(), .reduce(), and others are defined.
  
  Adding Custom Methods to Array: 
  You can extend Array.prototype to add custom methods that will be available to all arrays in your code.
  */
  
  /*
  // Adding a custom method to Array.prototype
  Array.prototype.square = function() {
    return this.map(element => element * element);
  };
  This code adds a new method square to all arrays.
   Now, every array in JavaScript can call square() and get a new array with its elements squared.
  // Using the custom method
  const numbers = [1, 2, 3];
  console.log(numbers.square()); // [1, 4, 9]
  
  */
  