import React from "react";
import { useRecurring } from "../context/RecurringContext";
import Button from "@mui/material/Button";

function YearSelection() {
  const { selectedYears, setSelectedYears, recurrence } = useRecurring();
  const monthsOfYear = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const toggleMonth = (month) => {
    if (selectedYears.includes(month)) {
      setSelectedYears(selectedYears.filter((item) => item !== month));
    } else {
      setSelectedYears([...selectedYears, month]);
    }
  };

  if (recurrence === "Years") {
    return (
      <div className="daySelection">
        <label style={{ fontFamily: "arial" }}>Select Months of Year</label>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {monthsOfYear.map((month) => (
            <Button
              key={month}
              style={{
                color: selectedYears.includes(month) ? "white" : "black",
                margin: "5px",
                backgroundColor: selectedYears.includes(month)
                  ? "#1865f3ff"
                  : "#ccc",
                borderRadius: "20px",
              }}
              onClick={() => toggleMonth(month)}
            >
              {month}
            </Button>
          ))}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default YearSelection;
