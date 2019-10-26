import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import actionTypes from "../actionTypes";

function FilterDropdown(props) {

  // let filteredField = props.filteredField;
  // let options = props.options;

  let { filteredField, options, placeholder } = props;

  let [selectedOption, setSelectedOption] = useState("");
  let dispatch = useDispatch();

  function onChange(event) {
    let value = event.target.value;

    setSelectedOption(value);
    let action = {
      type: actionTypes.FILTER_CHANGE,
      filteredField,
      value
    };
    dispatch(action);
  }

  return <select id="from-selector"
    onChange={onChange}
    value={selectedOption}>
    <option value="">{placeholder}</option>
    {
      options.map(value => <option key={value}>{value}</option>)
    }
  </select>;
}

export default FilterDropdown;

