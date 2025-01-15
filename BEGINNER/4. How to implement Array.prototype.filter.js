 
function customFilter(callbackFn, thisArg) {
    // DO NOT REMOVE
    'use strict';
   
    // Check if the callbackFn is null or not a function
    if (typeof callbackFn !== 'function') {
      throw new TypeError(callbackFn + ' is not a function');
    }
     
    // Create an empty array to store the filtered elements
    const result = [];
  /*
  
  What is this?
  In JavaScript, this refers to the object that is calling the function.
  Here, the customFilter function is added to Array.prototype.
   When an array (e.g., numbers) calls numbers.customFilter(),
    the this inside customFilter refers to the array (numbers).
  */
  /*
  this.length gives the length of the array calling customFilter (e.g., numbers.length).
  We are looping through each element of the array by index (i).
  */
  
  
  
    // Loop through the array using `this`
    for (let i = 0; i < this.length; i++) {
      // Check if the element passes the test
      
      // callbackFn is called for each element
  //thisArg -> for extra arguments , more custumoizable filter fxn
      if (callbackFn.call(thisArg, this[i], i, this)) {
        result.push(this[i]);
      }
    }
  
    // Return the filtered array
    return result;
  
  
  }
  
  // DO NOT CHANGE
  Array.prototype.customFilter = customFilter;
  /*
Step-by-step flow:

i = 0: this[i] = 5. isGreaterThanTen(5) → false. Skip.
i = 1: this[i] = 12. isGreaterThanTen(12) → true. Add 12 to result.
i = 2: this[i] = 8. isGreaterThanTen(8) → false. Skip.
i = 3: this[i] = 20. isGreaterThanTen(20) → true. Add 20 to result.
Result: [12, 20].
*/



  
  /* why thiArg?
  -->
  
  const numbers = [5, 15, 25];
  const obj = {
    multiplier: 10,
  };
  
  function isGreaterThan(value) {
    return value > this.multiplier ; // Access `this.multiplier`
  }
  
  // Pass `obj` as `thisArg`
  const result = numbers.customFilter(isGreaterThan, obj);
  console.log(result); // [25]
  
  
  */