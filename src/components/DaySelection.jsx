import React from "react";
import { useRecurring } from "../context/RecurringContext";
import Button from "@mui/material/Button";

function DaySelection() {
  let { selectedDays, setSelectedDays, recurrence } = useRecurring();
  let daysOfWeek = [
    "SUN",
    "MON",
    "TUE",
    "WED",
    "THU",
    "FRI",
    "SAT",
  ];
  let toggleDay = (day)=>{
    if(selectedDays.includes(day)){
      setSelectedDays(selectedDays.filter(d=>d!==day))
    }
    else{
      setSelectedDays([...selectedDays,day]);
    }
  }
  if(recurrence === "Weeks"){
    return (
      <div className="daySelection">
        <label style={{ fontFamily: "arial" }}>Select Days of Week</label>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {daysOfWeek.map((day) => (
            <Button
              key={day}
              style={{
                color: selectedDays.includes(day) ? "white" : "black",
                margin: "5px",
                backgroundColor: selectedDays.includes(day)
                  ? "#1865f3ff"
                  : "#ccc",
                borderRadius: "20px",
              }}
              onClick={() => toggleDay(day)}
            >
              {day}
            </Button>
          ))}
        </div>
      </div>
    );
  }
  else{
    <p></p>
  }
}

export default DaySelection;
