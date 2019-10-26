import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import actionTypes from "../actionTypes";

function DayPicker() {
  let dispatch = useDispatch();
  let pickableDays = useSelector(state => state.pickableDays);
  let selectedDepartureDate = useSelector(state => state.filters.departureDate);

  function moveDays(byDays) {
    dispatch({
      type: actionTypes.MOVE_DAY_PICKER,
      byDays
    });

  }

  function onDayPicked(day) {
    dispatch({
      type: actionTypes.FILTER_CHANGE,
      filteredField: "departureDate",
      value: day.displayText
    });
  }

  return <div className={"table dayPicker"}>
    <div className={"table-row"}>
      <div className={"table-cell dayPicker-cell moreDaysBtn"} onClick={() => moveDays(-7)}>Previous 7 days</div>
      {
        pickableDays.map(dayData => {

          return <div className={"table-cell dayPicker-cell" + (selectedDepartureDate === dayData.displayText ? " selected-day" : "")} onClick={() => onDayPicked(dayData)}>
            <span>{dayData.displayText}</span>
            <br/>
            <span>${dayData.lowestPrice}+</span>
          </div>
        })
      }
      <div className={"table-cell dayPicker-cell moreDaysBtn"} onClick={() => moveDays(7)}>Next 7 days</div>
    </div>
  </div>;
}

export default DayPicker;
