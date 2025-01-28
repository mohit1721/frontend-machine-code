import { useEffect, useState } from "react";
const LIGHTS = {
  color: {
    red: "red",
    green: "green",
    yellow: "yellow",
  },
  time: {
    red: 4000,
    yellow: 500,
    green: 3000,
  },
};

const TrafficLight = () => {
  const [active, setActive] = useState(LIGHTS.color.red);
  /*
Here's how the traffic light should behave:
Initially, the red light should be active.
After 4000ms, the red light turns off, and the green light turns on.
After 3000ms, the green light turns off, and the yellow light turns on.
After 500ms, the yellow light turns off, and the red light turns on.
This sequence repeats indefinitely.

*/
  useEffect(() => {
    // switch (active) {
    //   case LIGHTS.color.yellow:
    //     setTimeout(() => {
    //       setActive(LIGHTS.color.red);
    //     }, 500);
    //     break;
    //   case LIGHTS.color.green:
    //     setTimeout(() => {
    //       setActive(LIGHTS.color.yellow);
    //     }, 3000);
    //     break;
    //   case LIGHTS.color.red:
    //     setTimeout(() => {
    //       setActive(LIGHTS.color.green);
    //     }, 4000); //red aya to hold red for 4s  & agli light jo jalgei , usko setActive m daalo
    //     break; }

    // #2. switch/if-else both runs
    if (active === LIGHTS.color.yellow) {
      setTimeout(() => {
        setActive(LIGHTS.color.red);
      }, LIGHTS.time.yellow);
    } else if (active === LIGHTS.color.green) {
      setTimeout(() => {
        setActive(LIGHTS.color.yellow);
      }, LIGHTS.time.green);
    } else if (active === LIGHTS.color.red) {
      setTimeout(() => {
        setActive(LIGHTS.color.green);
      }, LIGHTS.time.red);
    }
  }, [active]);

  return (
    <div className="container">
      <div
        style={
          active !== LIGHTS.color.green ? { opacity: 0.5 } : { opacity: 1 }
        }
        className="green"
      ></div>
      <div
        style={
          active !== LIGHTS.color.yellow ? { opacity: 0.5 } : { opacity: 1 }
        }
        className="yellow"
      ></div>
      <div
        style={active !== LIGHTS.color.red ? { opacity: 0.5 } : { opacity: 1 }}
        className="red"
      ></div>
    </div>
  );
};
export default TrafficLight;
