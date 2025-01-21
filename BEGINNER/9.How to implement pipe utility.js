function pipe(...functions) { //Takes any number of functions as arguments using the rest parameter ...functions

    // Returning a new function : --> // The returned function accepts the initial input(e.g., an object or string)
    // function myfunc(input)
    // {
    //   let result = input;
    //   for(const fxn of functions)
    //   {
    //     result = fxn(result);
    //   }
    //   return result;
    // }
    
    // return myfunc;
    
    /*
    const method = pipe(getName, makeUpperCase, slice);
    const value = method({ name: 'devtools' });
    */
    
    // #2 using reduce
    
    function myfunc(input){
      return functions.reduce((acc, oneFxn) => oneFxn(acc) //// Pass the result of the last function (acc) to the current function (fn)
      
      , input); //initial value of acc.**
    }
    
    return myfunc;
    
    
    }
    
    /*
    Is pipe a callback function?
    No, pipe is not a callback function. Instead, pipe is a higher-order function because it:
    
    Takes other functions (fn1, fn2, fn3, ...) as input arguments.
    Returns a new function that can be called later.
    Callbacks, on the other hand, are functions that are passed into another function to be called later as part of that function’s execution.
    
    ___________________________________________-
    
    pipe as a higher-order function:
    
    It accepts functions as arguments (...functions).
    It returns a new function (the one that takes input).
    
    oneFxn in reduce is a callback:
    
    Inside the reduce method, oneFxn (each function in the pipeline) is a callback because:
    It is passed into reduce and called later with fn(acc).
    Key Distinction
    pipe
    What it is: A higher-order function.
    Purpose: Combines multiple functions into a pipeline.
    fn (inside reduce)
    What it is: A callback function.
    Purpose: Processes the data (acc) step-by-step.
    
    
    ======================
    A higher-order function is a function that:
    
    Takes other functions as arguments, or
    Returns a new function.
    This makes it "higher-order" because it operates on functions, treating them as values.
    Examples: map, filter, reduce, pipe
    Real-Life Example
    Think of Netflix recommendations:
    
    You tell Netflix your preferences (callback function).
    Netflix (higher-order function) uses your preferences to filter and suggest movies.
    ++++++++++++++++++++++++++++
    Callback Function in JavaScript
    A callback function is a function that is passed as an argument to another function and is executed later, either synchronously or asynchronously.
    
    const method = pipe(getName, makeUpperCase, slice); // Passing functions (callbacks)
    
    
    */