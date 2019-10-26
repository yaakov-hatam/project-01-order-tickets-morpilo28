import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import FilterDropdown from "./FilterDropdown";
import actionTypes from "../actionTypes";
import {getDayString} from "../dateUtils";

function FilterSection() {
  let cities = useSelector(state => state && state.cities);
  let [departureDate, setDepartureDate] = useState("");
  let dispatch = useDispatch();

  function onDepartureDateChange(event) {
    let value = event.target.value;
    let parsedDate = getDayString(new Date(value));
    setDepartureDate(value);
    dispatch({
      type: actionTypes.FILTER_CHANGE,
      filteredField: "departureDate",
      value: parsedDate
    });
  }

  return <div className={"filter-section"}>
    <h1>Bus Tickets</h1>
    <FilterDropdown filteredField={"fromCity"} options={cities} placeholder={"From"}/>
    <FilterDropdown filteredField={"toCity"} options={cities} placeholder={"To"}/>

    <input type="date"
           name={"departurePicker"}
           id={"departurePicker"}
           onChange={e => onDepartureDateChange(e)}
           value={departureDate}/>
  </div>;
}

export default FilterSection;
