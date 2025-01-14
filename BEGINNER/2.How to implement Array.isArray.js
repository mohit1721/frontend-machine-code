function customIsArray(value) {
    // write your code below
    console.log(Object.prototype.toString.call(value) === '[object Array]');
  
  }
  /*A polyfill is a piece of code that adds functionality to a web platform that is missing in certain browsers or environments
  In this case, the polyfill customIsArray mimics the behavior of Array.isArray in JavaScript, 
  which checks whether a given value is an array. The reason we create a polyfill is to replicate
  the behavior of Array.isArray() in environments that might not support it (like older browsers).
  */

  // all following calls return true
customIsArray([]);
customIsArray([1]);
customIsArray(new Array());
customIsArray(new Array("a", "b", "c", "d"));
customIsArray(new Array(3));
customIsArray(Array.prototype);

// all following calls return false
customIsArray();
customIsArray({});
customIsArray(null);
customIsArray(undefined);
customIsArray(17);
customIsArray("Array");
customIsArray(true);
customIsArray(false);
customIsArray(new Uint8Array(32));
