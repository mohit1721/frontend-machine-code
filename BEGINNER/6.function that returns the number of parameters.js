function getParameterCount(inputFunction) {
    // write your code below
    if(typeof(inputFunction) !== 'function')
      throw new TypeError(inputFunction+"is not a function")
    return inputFunction.length;
  
  }
  function defaultParams(a, b , c=2 ) {}
console.log(defaultParams.length); // Output: 2

  /*
  The length property of a function reflects the number of parameters it is declared with, excluding:
  Parameters with default values.
  Rest parameters (e.g., ...args).
  */
  
  /*
  NOTE->
  function defaultParams(a, b = 2, c = 3) {}
  console.log(getParameterCount(defaultParams)); // Expected output: 1
  
  iska ans. 1 hoga** [verified in compiler*]
  ________________
  function defaultParams(a, b = 2, c ) {}
  console.log(getParameterCount(defaultParams)); // Expected output: 1
  // default k baad parameters ko count nhi krti*
  
  */