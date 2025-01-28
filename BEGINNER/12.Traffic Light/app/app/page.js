'use client'

import TrafficLight from "../components/TrafficLight";
// import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <TrafficLight />
    </div>
  );
}
/*
LESSON
. setTimeout
Definition: Ek function ko ek baar execute karta hai, specified delay ke baad.

Syntax:

javascript
Copy
Edit
setTimeout(() => {
  // code to execute
}, delayInMilliseconds);
Key Features:

Ek hi baar execute hota hai, delay complete hone ke baad.
Timer khud se repeat nahi karta.
Delay khatam hote hi callback function execute hota hai.
Example:

javascript
Copy
Edit
setTimeout(() => {
  console.log("Executed after 3 seconds");
}, 3000);
Output: After 3 seconds: "Executed after 3 seconds"



setTimeout aur setInterval dono hi JavaScript timers hain, lekin unka behavior aur use-case alag hai. Yaha in dono ka clear difference explain kiya gaya hai:

1. setTimeout
Definition: Ek function ko ek baar execute karta hai, specified delay ke baad.

Syntax:

javascript
Copy
Edit
setTimeout(() => {
  // code to execute
}, delayInMilliseconds);
Key Features:

Ek hi baar execute hota hai, delay complete hone ke baad.
Timer khud se repeat nahi karta.
Delay khatam hote hi callback function execute hota hai.
Example:

javascript
Copy
Edit
setTimeout(() => {
  console.log("Executed after 3 seconds");
}, 3000);
Output: After 3 seconds: "Executed after 3 seconds"

2. setInterval
Definition: Ek function ko bar-bar execute karta hai, har baar specified interval ke baad.

Syntax:

javascript
Copy
Edit
setInterval(() => {
  // code to execute
}, intervalInMilliseconds);
Key Features:

Har interval ke baad continuously function execute karta hai.
Jab tak explicitly clearInterval nahi likhte, tab tak chalta rahega.
Example:

javascript
Copy
Edit
const intervalId = setInterval(() => {
  console.log("Executed every 2 seconds");
}, 2000);

// Stop interval after 10 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval stopped");
}, 10000);
Output:

Every 2 seconds: "Executed every 2 seconds"
After 10 seconds: "Interval stopped"

NOTE-> setInterval m jo time h wo fixed hota h... usko variable nhi bna skte..


When to Use?
Scenario	Use
Task needs to run only once.	setTimeout
Task needs to run repeatedly.	setInterval
Example: Delayed API call.	setTimeout
Example: Updating clock UI.	setInterval



*/