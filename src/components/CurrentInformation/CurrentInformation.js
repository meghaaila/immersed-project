import "./CurrentInformation.scss";

function CurrentInformation() {
  return (
    <div className="currentInformation">
      <div>
        Current team online: <span className="blink">Team spiral </span>
      </div>
      <button className="primary">Join</button>
    </div>
  );
}

export default CurrentInformation;
