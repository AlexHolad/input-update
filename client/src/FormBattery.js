import { useState } from "react";
import DisplayBattery from "./DisplayBattery";
import { data } from "./data1";

const FormBattery = () => {
  const [display, setDisplay] = useState(data);
  const [time, setTime] = useState('');
  const [speed, setSpeed] = useState('');

  const handleClick = (i) => {
    setDisplay((display) => {
      const displayCopy = [...display];
      displayCopy[i] = {
        ...displayCopy[i],
        intervals: [...display[i].intervals, { time: time, speed: speed }]
      };
      return displayCopy;
    });
    setTime("");
    setSpeed("");
  };

  console.log(display);
  return (
    <div>
      <h2>Battery Form</h2>
      {/* Display for Arrays */}
      <div>
        {display.map((item, i) => (
          <>
            <DisplayBattery
              key={i}
              name={item.name}
              intervals={item.intervals}
            />
            <div className="form-container">
              <div>
                <input
                  key={i}
                  type="number"
                  value={time}
                  placeholder="time"
                  onChange={(e) => setTime(e.target.valueAsNumber)}
                />
              </div>
              <div>
                <input
                  key={i}
                  type="number"
                  value={speed}
                  placeholder="speed"
                  onChange={(e) => setSpeed(e.target.valueAsNumber)}
                />
              </div>
              <button onClick={() => handleClick(i)}>Submit</button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
export default FormBattery;

// updateList(state => {
//   const stateCopy = [...state]
//   const indexOfName = stateCopy.findxIndex(item => item.name === name)

//   stateCopy[indexOfName] = {
//     ...stateCopy[indexOfName],
//     subList: [...state[indexOfName].subList, newItem]
//   }

//   return stateCopy
// })

// onChange={(e) =>
//   setUse(
//     users.map((eachUser) =>
//       item.id === eachUser.id ? { ...eachUser, name: e.target.value } : eachUser,
//     ),
//   )
// }

// const [userReq, setUserReq] = useState({ name: '' })

// function onChangeHandler (e) {
//   setUserReq({ name: e.target.value })
// };

// Property 'timestamp' does not exist on type '{ id: string; name: string; intervals: { timestamp: number; kwh: number; }[]; }'
