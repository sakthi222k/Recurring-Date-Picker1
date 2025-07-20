import * as React from "react";
import { useRecurring } from "../context/RecurringContext";
import TextField from "@mui/material/TextField";


function CustomPattern() {
  let { customPattern, setCustomPattern, recurrence } = useRecurring();
  let handleChange = (e) => {
    setCustomPattern({ interval: e.target.value });
  };
  return (
    <div className="repeat-every">
      <label style={{ fontFamily: "arial" }}>Repeat Every</label>
      <TextField
        className="interval"
        size="small"
        type="number"
        min="1"
        value={customPattern.interval}
        onChange={handleChange}
      />
      <p style={{ fontFamily: "arial" }}>{recurrence}</p>
    </div>
  );
}

export default CustomPattern;
