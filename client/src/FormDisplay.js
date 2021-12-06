const FormDisplay = ({
  handleClick,
  key,
  timestamp,
  setTimestamp,
  kwh,
  setKwh
}) => {
  return (
    <div>
      <div className="form-container">
        <div>
          <input
            type="text"
            value={timestamp}
            placeholder="timestamp"
            onChange={(e) => setTimestamp(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            value={kwh}
            placeholder="kwh"
            onChange={(e) => setKwh(e.target.value)}
          />
        </div>
        <button onClick={() => handleClick(key)}>Submit</button>
      </div>
    </div>
  );
};

export default FormDisplay;
