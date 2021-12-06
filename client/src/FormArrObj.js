import { useState } from "react";
import DisplayForArrObj from "./DisplayForArrObj";
import { defaultList } from "./data";

const FormArray = () => {
  //For Updating Arrays
  const [display, setDisplay] = useState(defaultList);
  const [newInput, setNewInput] = useState([]);

  const handleSubmitForArray = (e) => {
    e.preventDefault();
    //Option 1 using concat method
    // setDisplay((display) => display.concat({ name: newInput }));

    //Option 2 using spread operator
    setDisplay((display) => {
      const displayCopy = [...display];
      displayCopy[0] = {
        ...displayCopy[0],
        subList: [...display[0].subList, { name: newInput }]
      };

      return displayCopy;
    });

    setNewInput("");
  };

  console.log(newInput);
  console.log(display);
  return (
    <div>
      <h2>Updating an Array of Objects in an Object</h2>
      {/* Display for Arrays */}
      <form onSubmit={handleSubmitForArray}>
        <input
          type="text"
          value={newInput}
          placeholder="new input"
          onChange={(e) => setNewInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {display.map((item, i) => (
        <DisplayForArrObj key={i} name={item.name} subList={item.subList} />
      ))}
    </div>
  );
};
export default FormArray;

// updateList(state => {
//   const stateCopy = [...state]
//   const indexOfName = stateCopy.findxIndex(item => item.name === name)

//   stateCopy[indexOfName] = {
//     ...stateCopy[indexOfName],
//     subList: [...state[indexOfName].subList, newItem]
//   }

//   return stateCopy
// })
