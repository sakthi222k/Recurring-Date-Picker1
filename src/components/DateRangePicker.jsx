import React from "react";
import { useRecurring } from "../context/RecurringContext";
import TextField from "@mui/material/TextField";

function DateRangePicker() {
  let { dateRange, setDateRange } = useRecurring();
  let handleChange = (e)=>{
    let {name,value} = e.target;
    setDateRange({...dateRange,[name]:value})
  }
  return (
    <div className="dateRange">
      <label htmlFor="startDate">Start Date:</label>
      <TextField
        id="startDate"
        size="small"
        type="date"
        name="startDate"
        value={dateRange.startDate}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="endDate">End Date (Optional):</label>
      <TextField
        id="endDate"
        size="small"
        type="date"
        name="endDate"
        value={dateRange.endDate}
        onChange={handleChange}
      />
    </div>
  );
}

export default DateRangePicker;
