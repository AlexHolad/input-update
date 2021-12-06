import { useState } from "react";
import DisplayForArray from "./Display";

const FormArray = () => {
  //For Updating Arrays
  const [display, setDisplay] = useState(["Gargi"]);
  const [newInput, setNewInput] = useState("");

  const handleSubmitForArray = (e) => {
    e.preventDefault();
    //Option 1 using concat method
    // setDisplay(display => display.concat(newInput))

    //Option 2 using spread operator
    setDisplay((display) => [...display, newInput]);
    setNewInput("");
  };

  console.log(newInput);
  console.log(display);
  return (
    <div>
      <h2>Updating an Array</h2>
      {/* Display for Arrays */}
      <form onSubmit={handleSubmitForArray}>
        <input
          value={newInput}
          placeholder="new input"
          onChange={(e) => setNewInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {display.map((item, i) => (
        <DisplayForArray name={item} />
      ))}
    </div>
  );
};
export default FormArray;
