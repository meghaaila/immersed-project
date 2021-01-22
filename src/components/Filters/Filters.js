import "./Filters.scss";
import 'react-dropdown/style.css';
import Dropdown from 'react-dropdown';
import React, {useState} from "react";

function Filters(props) {
  const [dropdownValue, setDropdownValue] = useState(props.options[0]);
  const controlStyles = {
    borderRadius: '1px solid black',
    padding: '5px',
    background: 'red',
    color: 'white',
  };
  function onSelect(val){
    setDropdownValue(val);
    props.onClickCallBack(val);
  }
  return(
    <Dropdown options={props.options} onChange={onSelect} value={dropdownValue}
      style={controlStyles}
    className="filters-class"
    placeholder="Select a date range" />
  )
}
export default Filters
