import React from "react";
import { useRecurring } from "../context/RecurringContext";
import Paper from "@mui/material/Paper";

function MiniCalendar() {
  const {
    recurrence,
    selectedDays,
    selectedMonths,
    selectedYears,
    dateRange,
    customPattern,
  } = useRecurring();

  const renderPreview = () => {
    switch (recurrence) {
      case "Days":
        return <p>Repeats every {customPattern.interval} day(s)</p>;
      case "Weeks":
        return (
          <div>
            <p>Repeats Weekly on:</p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "5px",
                justifyContent:
                  selectedDays.length > 0 ? "center" : "center",
                alignItems: "center",
                padding:"5px"
              }}
            >
              {selectedDays.length > 0 ? (
                selectedDays.map((day) => (
                  <span
                    key={day}
                    style={{
                      marginTop: "10px",
                      backgroundColor: "#1865f3ff",
                      color: "white",
                      borderRadius: "20px",
                      padding: "5px 10px",
                      fontSize: "14px",
                    }}
                  >
                    {day}
                  </span>
                ))
              ) : (
                <p style={{ fontStyle: "italic", color: "grey" }}>
                  No days selected
                </p>
              )}
            </div>
          </div>
        );
      case "Months":
        return (
          <div>
            <p>Repeats Monthly on:</p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "5px",
                justifyContent:
                  selectedMonths.length > 0 ? "center" : "center",
                alignItems: "center",
                padding: "5px",
              }}
            >
              {selectedMonths.length > 0 ? (
                selectedMonths.map((week) => (
                  <span
                    key={week}
                    style={{
                      backgroundColor: "#1865f3ff",
                      color: "white",
                      borderRadius: "20px",
                      padding: "5px 10px",
                      fontSize: "14px",
                    }}
                  >
                    {week} Week
                  </span>
                ))
              ) : (
                <p
                  style={{
                    fontStyle: "italic",
                    color: "grey",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  No weeks selected
                </p>
              )}
            </div>
          </div>
        );
      case "Years":
        return (
          <div>
            <p>Repeats Yearly in:</p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "5px",
                justifyContent:
                  selectedYears.length > 0 ? "center" : "center",
                alignItems: "center",
                padding: "5px",
              }}
            >
              {selectedYears.length > 0 ? (
                selectedYears.map((month) => (
                  <span
                    key={month}
                    style={{
                      backgroundColor: "#1865f3ff",
                      color: "white",
                      borderRadius: "20px",
                      padding: "5px 10px",
                      fontSize: "14px",
                    }}
                  >
                    {month}
                  </span>
                ))
              ) : (
                <p
                  style={{
                    fontStyle: "italic",
                    color: "grey",
                  }}
                >
                  No months selected
                </p>
              )}
            </div>
          </div>
        );
      default:
        return <p>Please select a recurrence option.</p>;
    }
  };

  return (
    <Paper elevation={5} style={{ marginTop: "20px", padding: "20px",textAlign:"center" }}>
      <h3 style={{ fontFamily: "arial", marginBottom: "10px" }}>
        Mini Calendar Preview
      </h3>

      {renderPreview()}

      <div style={{ marginTop: "15px" }}>
        <p>
          <strong>Start Date:</strong>{" "}
          {dateRange.startDate ? dateRange.startDate : "Not selected"}
        </p>
        <p>
          <strong>End Date:</strong>{" "}
          {dateRange.endDate ? dateRange.endDate : "Not selected"}
        </p>
      </div>
    </Paper>
  );
}

export default MiniCalendar;
