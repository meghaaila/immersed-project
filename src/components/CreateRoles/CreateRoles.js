import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "./CreateRoles.scss";
export default () => {
  return(
  <Popup
    trigger={<button className="primary">Create roles </button>}
    modal
    nested
  >
  {close => (
    <div className="modal">
      <button className="close" onClick={close}>
        &times;
      </button>
      <div className="header"> Create roles </div>
      <div className="content">
        Name: <input type="text" name="name" defaultValue="" />
        <div style={{float: 'right'}}>
        Enter roles
          <input type="radio" id="admin" name="roles" value="admin" />Admin
          <input type="radio" id="user" name="roles" value="user" />User
        </div>
      </div>
      <div className="actions">
        <button
          className="button"
          onClick={() => {
            console.log('modal closed ');
            close();
          }}
        >
          Add user
        </button>
        <button
          className="button"
          onClick={() => {
            console.log('modal closed ');
            close();
          }}
        >
          Close modal
        </button>
      </div>
    </div>
  )}
  </Popup>
)
}
