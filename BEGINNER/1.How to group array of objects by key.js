function groupByTypeBruteForce(collection) {
  // Initialize an empty object to store grouped results
  const grouped = {};

  // Iterate over each item in the collection
  for (let i = 0; i < collection.length; i++) {
    const item = collection[i]; // Get the current item
    const type = item.type; // Get the type of the current item

    // If this type doesn't exist in grouped, create an empty array for it
    if (!grouped[type]) {
      grouped[type] = [];
    }

    // Add the current item to the appropriate group
    grouped[type].push(item);
  }

  // Return the grouped object wrapped in an array
  return [grouped];
}



function groupByType(collection) {
    // Use reduce to group objects by their type key
    const grouped = collection.reduce((result, item) => {
      // Check if the type key already exists in the result object
      const type=item.type;
      if (!result[type]) {
        result[type] = []; // Initialize an array for this type if it doesn't exist
      }
      result[type].push(item); // Add the current item to the appropriate group
      return result; // Return the updated result object
    }, {}); // The initial value for result. This starts as an empty object.
      // Wrap the grouped object in an array as per the required format
    return [grouped];
  }
  
// Why prompt() doesn’t work in VS Code:
// Browser-specific: prompt() is a method provided by the browser's window object (in JavaScript running in the browser), which allows user input through a dialog box.
// Taking user input
/*
Enter item name (or 'done' to finish): Banana
Enter item type: fruit
Do you want to add another item? (yes/no): yes
Enter item name (or 'done' to finish): Lettuce
Enter item type: vegetable
Do you want to add another item? (yes/no): no

*/

function getUserInput() {
  let collection = [];
  let moreItems = true;

  while (moreItems) {
    let name = prompt("Enter item name (or 'done' to finish):");
    if (name.toLowerCase() === 'done') {
      moreItems = false;
      break;
    }

    let type = prompt("Enter item type:");
    collection.push({ name, type });

    let addMore = prompt("Do you want to add another item? (yes/no)");
    if (addMore.toLowerCase() !== 'yes') {
      moreItems = false;
    }
  }

    console.log("Result->",groupByType(collection)); // Displaying the grouped result
} 
  
  
  // Call the input function
  getUserInput();