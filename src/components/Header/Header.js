import "./Header.scss";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Select from 'react-select'
import React, { useState } from 'react';

const settingsIcon = process.env.PUBLIC_URL +"./icons/settings.png";


function Header(props) {
  const options = props.roles;
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [selectedValue, setSelectedValue] = useState(options[0]);
  const toggleTrueFalse = () => setToggleDropdown(!toggleDropdown);

  function onSelect(val){
    setSelectedValue(val)
    props.onClickCallBack({val})
  }
  return (
    <div id="header">
    	<div>immersed Dashboard</div>
    	<div className="settings-dropdown">
        <img src={settingsIcon} id="img" alt="" onClick={toggleTrueFalse}/>
        <div className={toggleDropdown ? 'show-dropdown': 'hidden'}>
          <Dropdown options={options}  value={selectedValue} onChange={onSelect}
          className="filters-class" />
        </div>
      </div>
    </div>
  );
}

export default Header;
