import Sublist from "./Sublist";

const DisplayForArrObj = ({ name, subList }) => {
  return (
    <div>
      {/* <h1>Display</h1> */}
      <div>
        <h5>Name: {name}</h5>
        {subList.map((item, i) => (
          <Sublist key={i} name={item.name} />
        ))}
      </div>
    </div>
  );
};
export default DisplayForArrObj;
