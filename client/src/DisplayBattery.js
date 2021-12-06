import Intervals from "./Intervals";

const DisplayBattery = ({ name, intervals }) => {
  return (
    <div>
      {/* <h1>Display</h1> */}
      <div>
        <h5>Name: {name}</h5>
        {intervals.map((item, i) => (
          <Intervals key={i} time={item.time} speed={item.speed} />
        ))}
      </div>
    </div>
  );
};
export default DisplayBattery;
