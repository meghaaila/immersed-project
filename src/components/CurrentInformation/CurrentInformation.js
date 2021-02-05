import "./CurrentInformation.scss";
import React from "react";
import Popup from 'reactjs-popup';

function CurrentInformation() {
  const [team,setTeam] = React.useState("Team 1");
  const [confirmFlag,setConfirmFlag] = React.useState(false);
  return (
    <div>
      <div className={confirmFlag? 'timeoutHide confirm': 'hidden'}> You have joined {team} </div>
      <div className="currentInformation">
        <div>
          Current team online: <span className="blink">{team} </span>
        </div>
        <Popup
          trigger={<button className="button primary"> Join team </button>}
          modal
          nested
        >
          {close => (
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
              </button>
              <div className="header"> Confirm joining team</div>
              <div className="content">
              You are about to join <strong>{team}</strong>. Please make sure to save your work before switching teams!
              </div>
              <div className="actions">
                <button
                  className="button primary"
                  onClick={() => {
                    setConfirmFlag(true);
                    close();
                  }}
                >
                  Confirm
                </button>
                <button
                  className="button secondary"
                  onClick={() => {
                    close();
                  }}
                >
                  close modal
                </button>
              </div>
            </div>
          )}
        </Popup>

      </div>
    </div>
  );
}


export default CurrentInformation;
