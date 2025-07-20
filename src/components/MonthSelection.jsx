import React from "react";
import { useRecurring } from "../context/RecurringContext";
import Button from "@mui/material/Button";

function MonthSelection() {
  const { selectedMonths, setSelectedMonths, recurrence } = useRecurring();
  const monthOptions = ["1st", "2nd", "3rd", "4th", "Last"];

  const toggleMonthOption = (option) => {
    if (selectedMonths.includes(option)) {
      setSelectedMonths(selectedMonths.filter((item) => item !== option));
    } else {
      setSelectedMonths([...selectedMonths, option]);
    }
  };

  if (recurrence === "Months") {
    return (
      <div className="daySelection">
        <label style={{ fontFamily: "arial" }}>Select Week of Month</label>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {monthOptions.map((option) => (
            <Button
              key={option}
              style={{
                color: selectedMonths.includes(option) ? "white" : "black",
                margin: "5px",
                backgroundColor: selectedMonths.includes(option)
                  ? "#1865f3ff"
                  : "#ccc",
                borderRadius: "20px",
              }}
              onClick={() => toggleMonthOption(option)}
            >
              {option}
            </Button>
          ))}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default MonthSelection;
